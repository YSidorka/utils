const { isEmpty } = require('./is-empty');

test(`isEmpty is function`, () => {
  expect(typeof isEmpty).toBe('function');
});

test(`isEmpty - true cases`, () => {
  expect(isEmpty('')).toBe(true); // empty string
  expect(isEmpty([])).toBe(true); // []
  expect(isEmpty(null)).toBe(true); // null
  expect(isEmpty(undefined)).toBe(true); // undefined
  expect(isEmpty({})).toBe(true); // {}
  expect(isEmpty(0)).toBe(true); // 0
  expect(isEmpty(1)).toBe(true); // 1

  const A = { a: 1, fn: () => {} };
  const B = Object.create(A);
  expect(isEmpty(B)).toBe(true); // B = Object.create(A)
});

test(`isEmpty - false cases`, () => {
  expect(isEmpty(() => {})).toBe(false); // Fn
  expect(isEmpty([1])).toBe(false);
  expect(isEmpty({ a: 1 })).toBe(false);
});
