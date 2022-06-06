require('../filterByObj_prototype');

test(`filterByObj is function in a Array.prototype`, () => {
  expect(typeof [].filterByObj).toBe('function');
});
