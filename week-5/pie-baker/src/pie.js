/**
 * Author: Brandon Salvemini
 * Date: 4/17/2024
 * File Name: pie.js
 * Description: A pie baking function
 */
'use strict';

function bakePie(pieType, ingredients) {
  // essential ingredients: flour, sugar, butter

  // If the ingredients array does not include flour
  if (!ingredients.includes('flour')) {
    //Log message stating missing ingredient
    console.warn('Essential ingredient flour is missing.');

    // Exit with a non-zero error code
    process.exit(1);
  }

  // If the ingredients array does not include sugar
  if (!ingredients.includes('sugar')) {
    //Log message stating missing ingredient
    console.warn('Essential ingredient sugar is missing.');

    // Exit with a non-zero error code
    process.exit(1);
  }

  // If the ingredients array does not include butter
  if (!ingredients.includes('butter')) {
    //Log message stating missing ingredient
    console.warn('Essential ingredient butter is missing.');

    // Exit with a non-zero error code
    process.exit(1);
  }

  // Return success message
  return `${pieType} pie was baked successfully!`;
}

// export the function using the module.exports object
module.exports = { bakePie };
