const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui
describe 
test('sums two values', () => {
 expect(sum(4, 5)).toEqual(9);
})
test('sums two values', () => {
  expect(sum(0, 0)).toEqual(0);
})
test('sums two values', () => {
  expect({ sum(4, '5') }).toEqual(0);
})
