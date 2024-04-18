/**
 * Author: Brandon Salvemini
 * Date: 4/17/2024
 * File Name: pie.spec.js
 * Description: Tests for pie module
 */

'use strict';

const { bakePie } = require('../src/pie');

/*
   This is used to mock process.exit calls in the bakePie function
   It is needed to prevent the test from exiting and failing
   This is as seen on page 105 of Pragmatic NodeJS
*/
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

test('Test bakePie() with all essential ingredients', () => {
  expect(bakePie('Apple', ['flour', 'sugar', 'butter'])).toBe(
    'Apple pie was baked successfully!'
  );
});

test('Test bakePie() with essential ingredient flour missing', () => {
  const warn = jest.spyOn(console, 'warn');
  bakePie('Apple', ['sugar', 'butter']);
  expect(warn).toHaveBeenCalledWith('Essential ingredient flour is missing.');
  expect(exit).toHaveBeenCalled();
  warn.mockRestore();
});

test('Test bakePie() with essential ingredient sugar missing', () => {
  const warn = jest.spyOn(console, 'warn');
  bakePie('Apple', ['flour', 'butter']);
  expect(warn).toHaveBeenCalledWith('Essential ingredient sugar is missing.');
  expect(exit).toHaveBeenCalled();
  warn.mockRestore();
});

test('Test bakePie() with essential ingredient butter missing', () => {
  const warn = jest.spyOn(console, 'warn');
  bakePie('Apple', ['flour', 'sugar']);
  expect(warn).toHaveBeenCalledWith('Essential ingredient butter is missing.');
  expect(exit).toHaveBeenCalled();
  warn.mockRestore();
});
