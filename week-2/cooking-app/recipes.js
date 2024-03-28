/**
 * Author: Brandon Salvemini
 * Date: 3/26/2024
 * File Name: recipes.js
 * Description: Functions for recipe application
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  // String variable to hold initial recipe string
  let recipeString = 'Recipe created with ingredients: ';

  // loop through all items in the ingredients array
  for (let i = 0; i < ingredients.length; i++) {
    // Variable to hold current ingredient from the array
    let ingredient = ingredients[i];

    // if i is equal to the array length - 1
    // This is to check if we are on the last item in the array
    if (i === ingredients.length - 1) {
      // Append the current ingredient to the recipeString
      recipeString += ingredient;
    } else {
      // Append the current ingredient and a comma to the recipeString
      recipeString += ingredient + ', ';
    }
  }

  // Return recipeString
  return recipeString;
}

// Define the setTimer function
function setTimer(minutes) {
  // Return timer message
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  // Return quit message
  return 'Program exited';
}

// export the functions using the module.exports object
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};
