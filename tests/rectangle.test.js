/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Rectangle } = require('../src/rectangle');

test('Rectangle', () => {
  const rectangle = new Rectangle(3, 4);
  expect(typeof rectangle).toBe('object');
  expect(rectangle.perimeter()).toBe(14);
  expect(rectangle.isValid()).toBe(true);
  expect(rectangle.area()).toBe(12);
  expect(rectangle.sayName()).toBe('Rectangle');
  expect(rectangle.count()).toBe(4);
  //
  const r0 = new Rectangle(-1, 4);
  expect(r0.isValid()).toBe(false);
});
