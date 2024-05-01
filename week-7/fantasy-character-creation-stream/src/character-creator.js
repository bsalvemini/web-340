const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // Empty object to hold incoming character data
    this.characterData = {};
  }

  _write(chunk, encoding, callback) {
    // Get character data string from the chunk
    const charData = chunk.toString();

    // If charData is an empty string
    if (!charData) {
      // Send an error
      callback(new Error('Invalid character data'));

      // Return so the next line doesn't execute if no data is sent
      return;
    }

    // Data was sent as JSON string, so it needs to be parsed to an object
    this.characterData = JSON.parse(charData);

    // According to the Node.js documentation, this is called when the processing for the chunk is complete
    callback();
  }

  _read(size) {
    // Output a formatted character description
    this.push(
      `The character's class is ${this.characterData.class} and their gender is ${this.characterData.gender}. Here is a fun fact about them: ${this.characterData.funFact}`
    );

    // End the stream, otherwise the message will output continuously and cause tests to fail
    // According to the Node.js documentation, passing in null signals the end of the stream
    this.push(null);
  }
}

// export the CharacterCreator class using the module.exports object
module.exports = CharacterCreator;
