const { default: Axios } = require("axios");
require('dotenv').config()
console.log(process.env.USER);
const maxRows = 1
const username = process.env.USER
const weatherAPI = process.env.WEATHER_API
const pixabayAPI = process.env.PIXABAY_API
let latitude = ""
let longitude = ""
let weather = ""
let temp = ""
let images = {}
const dateNow = new Date()


// Empty JS object to act as endpoint for all routes including as the API endpoint
let travelInfo = {};
let travelHistory = [];

// Express package to run the server and its routes
const express = require("express");

// Initiate an instance of app
const app = express();

// Dependencies - Middleware
const bodyParser = require("body-parser");

// Middleware - connect to the app instance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cross origin allowance
const cors = require("cors");
app.use(cors());

// Point into the folder with the html, css and js
app.use(express.static('dist'))


//port and local
const port = 4500;

const server = app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
//todo Routes
// GET route:
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})


// NO SERVER ESTAMOS A CRIAR A ROTA PARA IR BUSCAR OS DADOS DA API!!!!
app.get("/travel-info", async(request, response) => {
    travelInfo = {}
    let city = request.query["city"]
    let date = request.query["date"]

    await Axios({
            method: 'get',
            url: 'http://api.geonames.org/searchJSON',
            params: {
                q: city,
                username: username,
                maxRows: maxRows
            }
        })
        .then((finalResult) => {

            latitude = finalResult.data.geonames[0].lat;
            longitude = finalResult.data.geonames[0].lng;
            travelInfo.city = request.query["city"];
            travelInfo.date = request.query["date"];


        })
        .catch(err => console.log(err));

    await Axios({
            method: 'get',
            url: 'https://api.weatherbit.io/v2.0/current',
            params: {
                lat: latitude,
                lon: longitude,
                key: weatherAPI
            }
        })
        .then((final) => {

            travelInfo.weather = final.data.data[0].weather.description;
            travelInfo.temp = final.data.data[0].temp;



        })
        .catch(err => console.log(err));

    await Axios({
            method: 'get',
            url: "https://pixabay.com/api/",
            params: {
                q: city,
                key: pixabayAPI
            }
        })
        .then((pixResult) => {
            travelInfo.images = pixResult.data.hits[0].largeImageURL;
            travelInfo.smallURL = pixResult.data.hits[0].previewURL;
        })
        .catch(err => console.log(err));

    function formatDate(dateNow) {
        var d = new Date(dateNow),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    travelInfo.dateToday = formatDate(dateNow)

    //save requested data to 




    travelHistory.push(travelInfo);

    response.json(travelInfo);

});



app.get("/travel-history", async(request, response) => {
    response.json(travelHistory);

})

// to do the tests
module.exports = server