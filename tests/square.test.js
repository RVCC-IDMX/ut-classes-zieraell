/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Square } = require('../src/square');

test('Square', () => {
  const square1 = new Square(12);
  expect(typeof square1).toBe('object');
  expect(square1.perimeter()).toBe(48);
  expect(square1.isValid()).toBe(true);
  expect(square1.area()).toBe(144);
  expect(square1.getSide()).toBe(12);
  expect(square1.sayName()).toBe('Square');
  expect(square1.count()).toBe(4);
  //
  const square2 = new Square(0);
  expect(typeof square2).toBe('object');
  expect(square2.perimeter()).toBe(0);
  expect(square2.area()).toBe(0);
  expect(square2.isValid()).toBe(false);

  const square3 = new Square(-1);
  expect(typeof square3).toBe('object');
  expect(square3.isValid()).toBe(false);

  const square4 = new Square('four');
  expect(typeof square4).toBe('object');
  expect(square4.isValid()).toBe(false);
  expect(square4.area()).toBe(0);
});
