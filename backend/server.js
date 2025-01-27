const express = require('express'); // Import express framework for building the server side application 
//const bodyParser = require('body-parser');
const cors = require('cors');
//const fs = require('fs');
//const path = require('path');
const dotenv = require('dotenv');


const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');


dotenv.config(); // Load .env file into process.env object for environment variables to be available in the application code 

const app = express(); // Create an express application


app.use(cors({origin: "http://localhost:3000"})); // Enable Cross-Origin Resource Sharing (CORS) for the express application to allow requests from the frontend application running on http://localhost:3000



app.use(bodyParser.json()); // Parse incoming request bodies in JSON format and make it available in the req.body object of the request object 


const PORT = process.env.PORT || 5000; // Define the port number for the express application to listen on

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the express application and listen on the defined port number
