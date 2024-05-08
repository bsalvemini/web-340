/**
 * Author: Brandon Salvemini
 * Date: 5/7/2024
 * File Name: character-creation.spec.js
 * Description: Tests for character creation module
 */

'use strict';

// For callbacks:
const fs = require('fs');

describe('Character Creation Module', () => {
  let createCharacter;
  let getCharacters;

  let characterString =
    'Class: Rouge Gender: Male Fun fact: Likes to sneak up on their enemies';

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(fs, 'readFile').mockImplementation((file, options, callback) => {
      callback(null, characterString);
    });

    jest
      .spyOn(fs, 'writeFile')
      .mockImplementation((file, data, callback) => callback(null));

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test('write a new character to the file', (done) => {
    createCharacter(characterString, (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test('read characters from the file', (done) => {
    getCharacters((err, characters) => {
      expect(err).toBeNull();
      expect(characters).toEqual(characterString);
      done();
    });
  });

  test('handles errors when writing to the file', (done) => {
    fs.writeFile.mockImplementationOnce((file, options, callback) =>
      callback(new Error('Error writing file'))
    );

    createCharacter(characterString, (err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe('Error writing file');
      done();
    });
  });
});
