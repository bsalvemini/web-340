'use strict';
/**
 * Author: Brandon Salvemini
 * Date: 4/2/2024
 * File Name: distance-calculator.spec.js
 * Description: Tests for calculateDistance function in the distance-calculator module
 */

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testSaturnToMercury() {
  try {
    assert.strictEqual(calculateDistance('Saturn', 'Mercury'), 9.15);
    console.log('testSaturnToMercury passed!');
    return true;
  } catch (error) {
    console.error(`Failed testSaturnToMercury:${error.message}`);
    return false;
  }
}

function testUranusToVenus() {
  try {
    assert.strictEqual(calculateDistance('Uranus', 'Venus'), 18.48);
    console.log('testUranusToVenus passed!');
    return true;
  } catch (error) {
    console.error(`Failed testUranusToVenus:${error.message}`);
    return false;
  }
}

// The assert code for this test is based on the code under the throws() section of this article:
// https://masteringjs.io/tutorials/node/assert
function testTwoOfSamePlanet() {
  try {
    assert.throws(() => {
      calculateDistance('Jupiter', 'Jupiter');
    }, /Enter two different planets/);
    console.log('testTwoOfSamePlanet passed!');
    return true;
  } catch (error) {
    console.error(`Failed testTwoOfSamePlanet:${error.message}`);
    return false;
  }
}

// Call your test functions here
testSaturnToMercury();
testUranusToVenus();
testTwoOfSamePlanet();
