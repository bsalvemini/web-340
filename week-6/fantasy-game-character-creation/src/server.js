/**
 * Author: Brandon Salvemini
 * Date: 4/23/2024
 * File Name: server.js
 * Description: Server and routes for character creation app
 */
'use strict';

const http = require('http');
const url = require('url');

// Object literal to hold character information
let character = {
  class: '',
  gender: '',
  funFact: '',
};

const server = http.createServer((req, res) => {
  // Parse URL and query strings
  const parsedURL = url.parse(req.url, true);

  // Get the URL path
  const pathName = parsedURL.pathname;

  // Get the query parameters
  const query = parsedURL.query;

  // Create character
  if (pathName === '/create' && req.method === 'POST') {
    // Set the HTTP status code to 201
    res.writeHead(201);

    // Set the properties of the character object to the items in the query string
    character.class = query.class;
    character.gender = query.gender;
    character.funFact = query.funFact;

    // End response with message
    res.end('Character created successfully.');

    // Confirm character creation
  } else if (pathName === '/confirm' && req.method === 'POST') {
    // Set the HTTP status code to 200
    res.writeHead(200);

    // End response with message
    res.end('Character creation confirmed.');

    // View character
  } else if (pathName === '/view' && req.method === 'GET') {
    // Set the HTTP status code to 200
    res.writeHead(200);

    // End response with message containing character information
    res.end(
      `Class: ${character.class} Gender: ${character.gender} Fun Fact: ${character.funFact}`
    );
    // If none of the above cases are true, send a 404 response
  } else {
    // Set the HTTP status code to 404
    res.writeHead(404);

     // End response
    res.end();
  }
});

// Start server listening on port 3000
server.listen(3000, () => {
  // Show message stating server is listening on port 3000
  console.log('Server listening on port 3000');
});

// export the server object using the module.exports object
module.exports = server;
