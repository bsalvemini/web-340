/**
 * Author: Brandon Salvemini
 * Date: 4/10/2024
 * File Name: index.js
 * Description: CLI program for interacting with the superhero module
 */

'use strict';

const readline = require('readline');
const SuperheroEmitter = require('./superhero');

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

superhero.on('action', (action) => {
  console.log(`Superhero performs action: ${action}`);
});

superhero.on('danger', (danger) => {
  console.log(`Superhero encounters danger: ${danger}`);
});

superhero.on('person', (person) => {
  console.log(`Superhero helps: ${person}`);
});

rl.on('line', (input) => {
  const [command, ...args] = input.split(' ');

  // Array of valid commands
  let validCommands = ['action', 'danger', 'help'];

  // If command is not in the validCommands array
  if (!validCommands.includes(command)) {
    // Output message to screen/console
    console.log('Invalid command');

    // Return so the next line doesn't execute if the command is invalid
    return;
  }

  // If there is no arguments
  if (args.length === 0) {
    // Output message to screen/console
    console.log('You must enter an argument for the command');
  } else {
    // Switch statement to handle all possible commands
    switch (command) {
      case 'action': // handle action command
        // Run the performAction method
        superhero.performAction(args[0]);

        // break so execution does not fall through
        break;

      case 'danger': // handle danger command
        // Run the encounterDanger method
        superhero.encounterDanger(args[0]);

        // break so execution does not fall through
        break;

      case 'help': // handle help command
        // Variable to hold name of person to help
        let name = '';

        // Iterate through the args array
        args.forEach((arg) => {
          // Append arg to the name string plus a space
          name += arg + ' ';
        });

        // Remove trailing space from the name string
        name.trimEnd;

        // Run the helpSomeone method
        superhero.helpSomeone(name);

        // break so execution does not fall through
        break;

      default: // handle any cases that are not any of the three above
        // Output message to screen/console
        console.error('Invalid command');

        // break so execution does not fall through
        break;
    }
  }
});

console.log(
  `Enter a command: "action", "danger", or "help", followed by a space and the argument.`
);
