/**
 * Author: Brandon Salvemini
 * Date: 5/10/2024
 * File Name: game-characters.js
 * Description: Main class that retrieves data from game-characters-data.js
 */
'use strict';

// game-characters.js
const { spawn } = require('child_process');
const { error } = require('console');
const { join } = require('path');
const characterDataFile = join(__dirname, 'game-characters-data.js');

class GameCharacters {
  constructor(pathToScript = characterDataFile) {
    this.pathToScript = pathToScript;
  }

  // Gets the character data
  getCharacters(callback) {
    const child = spawn('node', [this.pathToScript]);

    // Outputs character data
    child.stdout.on('data', (data) => {
      // Convert character data to JSON
      const characterData = JSON.parse(data.toString());
      callback(characterData, null);
    });

    // Output any errors from the child process
    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    // Output any errors spawning the child process
    child.on('error', (err) => {
      console.error(`spawn error: ${err}`);
      callback(null, err);
    });
  }
}

// export the GameCharacters class using the module.exports object
module.exports = { GameCharacters };
