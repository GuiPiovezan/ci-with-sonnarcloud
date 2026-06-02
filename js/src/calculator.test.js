const calculator = require('./calculator')

test('adds 1 + 2 to equal 3', () => {
  expect(calculator('+', 1, 2)).toBe(3)
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator('-', 5, 3)).toBe(2)
});

test('multiplies 4 * 6 to equal 24', () => {
  expect(calculator('*', 4, 6)).toBe(24)
});

test('divides 10 / 2 to equal 5', () => {
  expect(calculator('/', 10, 2)).toBe(5)
});

test('throws an error for invalid operator', () => {
  expect(() => calculator('%', 10, 2)).toThrow('Invalid operator')
});