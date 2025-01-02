const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { type } = require('os');
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;
const listId = process.env.LIST_ID;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Route to serve the signup page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

// Route to handle form submission
app.post('/', (req, res) => {
    // Extract form data
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // Create data object for Mailchimp API
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    // Convert data object to JSON
    const jsonData = JSON.stringify(data);

    // Mailchimp API URL
    const url = `https://us13.api.mailchimp.com/3.0/lists/${listId}`;

    // Options for the HTTPS request
    const options = {
        method: 'POST',
        auth: `talha:${apiKey}`
    };

    // Send data to Mailchimp
    const request = https.request(url, options, (response) => {
        // Listen for data event to handle the response
        response.on('data', (data) => {
            // Parse the received data from JSON and log it
            // console.log(JSON.parse(data));
        });
        // Check the response status code to determine success or failure
        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }
    });
    
    // Write the JSON data to the request body
    request.write(jsonData);
    request.end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
