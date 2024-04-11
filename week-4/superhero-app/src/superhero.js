/**
 * Author: Brandon Salvemini
 * Date: 4/10/2024
 * File Name: superhero.js
 * Description: Superhero module
 */

const EventEmitter = require('events');

class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
    this.action = '';
    this.danger = '';
    this.person = '';
  }

  performAction(action) {
    this.action = action;
    this.emit('action', action);
  }

  encounterDanger(danger) {
    this.danger = danger;
    this.emit('danger', danger);
  }

  helpSomeone(person) {
    this.person = person;
    this.emit('person', person);
  }
}

// export the SuperheroEmitter class using the module.exports object
module.exports = SuperheroEmitter;
