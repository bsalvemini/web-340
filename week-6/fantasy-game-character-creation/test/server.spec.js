/**
 * Author: Brandon Salvemini
 * Date: 4/23/2024
 * File Name: server.spec.js
 * Description: Tests for character creation app
 */
'use strict';

const http = require('http');
const server = require('../src/server');

describe('server', () => {
  afterAll(() => {
    server.close();
  });

  test('Test /create POST request with three query parameters', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=warrior&gender=male&funFact=Likes+to+eat+pizza',
      method: 'POST',
    };
    const req = http.request(options, (res) => {
      // Variable to hold response data
      let data = '';
      res.on('data', (chunk) => {
        // Append chuck to data
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created successfully.');
        done();
      });
    });
    // End request
    req.end();
  });

  test('Test /confirm POST request', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST',
    };
    const req = http.request(options, (res) => {
      // Variable to hold response data
      let data = '';
      res.on('data', (chunk) => {
        // Append chuck to data
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character creation confirmed.');
        done();
      });
    });
    // End request
    req.end();
  });

  test('Test /view GET request', (done) => {
    http.get('http://localhost:3000/view', (res) => {
      // Variable to hold response data
      let data = '';
      res.on('data', (chunk) => {
        // Append chuck to data
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe(
          'Class: warrior Gender: male Fun Fact: Likes to eat pizza'
        );
        done();
      });
    });
  });
});
