/**
 * Author: Brandon Salvemini
 * Date: 5/10/2024
 * File Name: game-characters-data.js
 * Description: Character data, outputs as JSON string
 */
'use strict';

// Array of character objects
const characters = [
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
];

// Output the characters array as a JSON string to the console
console.log(JSON.stringify(characters));
