const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { type } = require('os');

const app = express();

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
    const url = 'https://us13.api.mailchimp.com/3.0/lists/98fa893eee';

    // Options for the HTTPS request
    const options = {
        method: 'POST',
        auth: 'talha:4b5e404fb338e11c43da0eab881d01f3-us13'
    };

    // Send data to Mailchimp
    const request = https.request(url, options, (response) => {
        // Listen for data event to handle the response
        response.on('data', (data) => {
            // Parse the received data from JSON and log it
            console.log(JSON.parse(data));
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

// Start the server on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});

// API Key for Mailchimp: 4b5e404fb338e11c43da0eab881d01f3-us13

// List/Audience ID: 98fa893eee
