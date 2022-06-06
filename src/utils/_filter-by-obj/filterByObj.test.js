const { filterByObj } = require('../filterByObj');

test(`filterByObj is function`, () => {
  expect(typeof filterByObj).toBe('function');
});

test(`filterByObj is function`, () => {
  expect(filterByObj([], {})).toStrictEqual([]);
});
