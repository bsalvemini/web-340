/**
 * Author: Brandon Salvemini
 * Date: 4/10/2024
 * File Name: superhero.spec.js
 * Description: Tests for superhero module
 */
'use strict';

const assert = require('assert');
const SuperheroEmitter = require('../src/superhero');

const superhero = new SuperheroEmitter();

function testPerformAction() {
  try {
    // register an event listener for the 'action' event
    superhero.on('action', (action) => {
      console.log(`Superhero performs action: ${action}`);
    });
    // call the perform action method
    superhero.performAction('fly');
    assert.strictEqual(superhero.action, 'fly', 'The action should be fly');
    console.log('Passed testPerformAction');
    return true;
  } catch (err) {
    console.error(`Failed testPerformAction: ${err}`);
    return false;
  }
}

function testEncounterDanger() {
  try {
    // register an event listener for the 'danger' event
    superhero.on('danger', (danger) => {
      console.log(`Superhero encounters danger: ${danger}`);
    });
    // call the encounter danger method
    superhero.encounterDanger('fire');
    assert.strictEqual(superhero.danger, 'fire', 'The danger should be fire');
    console.log('Passed testEncounterDanger');
    return true;
  } catch (err) {
    console.error(`Failed testEncounterDanger: ${err}`);
    return false;
  }
}

function testHelpSomeone() {
  try {
    // register an event listener for the 'person' event
    superhero.on('person', (person) => {
      console.log(`Superhero helps: ${person}`);
    });
    // call the help someone method
    superhero.helpSomeone('Mary Jane');
    assert.strictEqual(
      superhero.person,
      'Mary Jane',
      'The person should be Mary Jane'
    );
    console.log('Passed testHelpSomeone');
    return true;
  } catch (err) {
    console.error(`Failed testHelpSomeone: ${err}`);
    return false;
  }
}

testPerformAction();
testEncounterDanger();
testHelpSomeone();
