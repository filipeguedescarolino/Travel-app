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




// POST Route: