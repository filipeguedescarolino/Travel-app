const { default: Axios } = require("axios");
const maxRows = 1
const username = "filipeslb10"
const dummy = {};

// Empty JS object to act as endpoint for all routes including as the API endpoint
let projectData = {};

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

app.get('/city', (req, res) => {
    let city = req.query.q
    dummy = {
        city: "Lisbon",
        cityId: 2267057,
        country: "Portugal",
        days: -113,
        departDate: 1593475200000,
        imageUrl: "https://pixabay.com/get/53e6d7424c56ab14f1dc8460962931761c3ddee35b4c704f752c79d39748c25e_640.jpg",
        weather: "No forecast for this city"
    };
    res.send(dummy)

})

// POST Route: