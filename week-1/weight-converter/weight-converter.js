/**
 * Author: Brandon Salvemini
 * Date:   3/20/2024
 * File Name: weight-converter.js
 * Description: A program that converts pounds to kilograms
 */

'use strict';

// Function to convert pounds to kilograms
// The formula for this function was obtained from here: https://www.checkyourmath.com/convert/weight_mass/lb_kg.php
function lbsToKilos(lbs) {
  return lbs * 0.45359237;
}

function main() {
  // Check if the user entered a pounds value
  if (process.argv.length != 3) {
    // Output error message to stderr
    console.error("Usage: node weight-converter.js <pounds>");

    // Exit with a non-zero error code
    process.exit(1);
  }

  // Get the pounds value from CLI args
  let pounds = process.argv[2];

  // If pounds is not a number
  if(isNaN(pounds)) {
    // Output error message to stderr
    console.error("Input must be a number.");

    // Exit with a non-zero error code
    process.exit(1);
  }

  // Convert pounds to kilograms using the lbsToKilos function
  let kilos = lbsToKilos(pounds);

  // Display the result of the conversion fixed to two decimal places
  console.log(kilos.toFixed(2));
}

// Call the main function
main();
