const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  // Object to hold character data
  let characterData = {
    class: 'Mage',
    gender: 'Female',
    funFact: 'Strongest mage in all the land',
  };

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test('should process data correctly when written to', (done) => {
    // JSON.stringify is used here to convert the object to a string as objects cannot be sent directly
    characterCreator.write(JSON.stringify(characterData));

    characterCreator.on('data', (data) => {
      expect(data.toString().trim()).toBe(
        "The character's class is Mage and their gender is Female. Here is a fun fact about them: Strongest mage in all the land"
      );
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Invalid character data');
      done();
    });
    characterCreator.write('');
  });

  test('should transform data correctly when written to', (done) => {
    const expectedOutput =
      "The character's class is Mage and their gender is Female. Here is a fun fact about them: Strongest mage in all the land";
    // JSON.stringify is used here to convert the object to a string as objects cannot be sent directly
    characterCreator.write(JSON.stringify(characterData), 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});
