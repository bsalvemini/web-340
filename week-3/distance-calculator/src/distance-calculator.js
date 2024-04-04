'use strict';
/**
 * Author: Brandon Salvemini
 * Date: 4/2/2024
 * File Name: distance-calculator.js
 * Description: Function to calculate distance between two planets
 */

function calculateDistance(planet1, planet2) {
  // Associative array holding the distance of each planet from the sun in AU
  // Data came from here: https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf
  let distanceFromSunInAU = {
    mercury: 0.39,
    venus: 0.72,
    earth: 1,
    mars: 1.52,
    jupiter: 5.2,
    saturn: 9.54,
    uranus: 19.2,
    neptune: 30.06,
  };

  // Convert the planet values to lowercase
  planet1 = planet1.toLowerCase();
  planet2 = planet2.toLowerCase();

  // Check if the parameters entered are in the distanceFromSunInAU associative array
  if (
    distanceFromSunInAU.hasOwnProperty(planet1) === false ||
    distanceFromSunInAU.hasOwnProperty(planet2) === false
  ) {
    // Throw error
    throw new Error('Invalid planet entered');
  }

  // Check if user entered two of the same planets
  if (planet1 === planet2) {
    // Output error message to stderr
    throw new Error('Enter two different planets');
  }

  // Calculate the distance between the two planets
  // Math.abs is used to make the value positive if it's negative
  let distance = Math.abs(
    distanceFromSunInAU[planet1] - distanceFromSunInAU[planet2]
  );

  // Fix distance to two decimal places
  distance = distance.toFixed(2);

  // Convert distance back to a number, as toFixed() converts it to a string
  // This is required for the strictEqual tests to pass
  distance = Number(distance);

  // return the distance value
  return distance;
}

// export the function using the module.exports object
module.exports = calculateDistance;
