/**
 * Author: Brandon Salvemini
 * Date: 3/26/2024
 * File Name: index.js
 * Description: Demonstration of recipes module
 */

// Import recipe module using require
const recipes = require('./recipes');

// Array with list of recipe ingredients
let recipeIngredients = ['Flour', 'Milk', 'Eggs', 'Sugar'];

// Call the createRecipe method with the recipeIngredients array
console.log(recipes.createRecipe(recipeIngredients));

// Call the setTimer method
console.log(recipes.setTimer(10));

// Call the quit method
console.log(recipes.quit());

// The calls to the methods are wrapped in console.log() statements to display
//  the returned result of the methods on the screen/console
