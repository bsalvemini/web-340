/**
 * Author: Brandon Salvemini
 * Date: 5/7/2024
 * File Name: character-creation.js
 * Description: Character creation using files
 */

'use strict';

// For callbacks:

const fs = require('fs');

// Needed to use the join function from the path module
const { join } = require('path');

// Join the current directory and the a file name to create a file path
const CHARACTERS_FILE = join(__dirname, 'characters.txt');

// Write the passed in character data to the CHARACTERS_FILE file
function createCharacter(character, callback) {
  fs.writeFile(CHARACTERS_FILE, character, (err) => {
    callback(err);
  });
}

// Read the character data from the CHARACTERS_FILE file
function getCharacters(callback) {
  fs.readFile(CHARACTERS_FILE, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // if there's an error call the callback with that error
      callback(err);
    } else {
      // There is no error, so the first argument is null
      callback(null, data);
    }
  });
}

// export the createCharacter and getCharacters methods using the module.exports object
module.exports = { createCharacter, getCharacters }; // For callbacks
