/**
 * Author: Brandon Salvemini
 * Date: 5/10/2024
 * File Name: game-characters.spec.js
 * Description: Tests for fantasy-game-characters
 */
'use strict';

// game-characters.spec.js
const { GameCharacters } = require('../src/game-characters');

describe('GameCharacters', () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test('should return game characters data', (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(data).toEqual([
        { class: 'Warrior', gender: 'Male', funFact: 'Likes to eat pizza' },
        {
          class: 'Mage',
          gender: 'Female',
          funFact: 'Strongest mage in all the land',
        },
        {
          class: 'Rouge',
          gender: 'Male',
          funFact: 'Likes to sneak up on their enemies',
        },
        {
          class: 'Warrior',
          gender: 'Female',
          funFact: 'Successfully slayed a dragon',
        },
      ]);
      expect(error).toBeNull();
      done();
    });
  });

  test('should handle an error when the game characters data script is not found', (done) => {
    const characters = new GameCharacters('script-that-does-not-exist.js');
    characters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test('should handle an error when the game characters data script fails', (done) => {
    const characters = new GameCharacters('failing-script.js');
    characters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});
