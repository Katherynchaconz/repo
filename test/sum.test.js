// test/sum.test.js
const sum = require('../src/sum');

test('should return the sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
