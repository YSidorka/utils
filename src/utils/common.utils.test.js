const {
  cloneObj,
  calcSize,
  diffDate,
  sleep,
  arraySum,
  clearString,
  uniqueArray
} = require('./common.utils');

test('all functions', () => {
  expect(typeof cloneObj).toBe('function');
  expect(typeof calcSize).toBe('function');
  expect(typeof diffDate).toBe('function');
  expect(typeof sleep).toBe('function');
  expect(typeof arraySum).toBe('function');
  expect(typeof clearString).toBe('function');
  expect(typeof uniqueArray).toBe('function');
});

test(`cloneObj object`, () => {
  expect(
    cloneObj({
      a: 'aa',
      b: [1, 2, 3],
      c: {
        a: 'aa',
        b: [1, 2, 3]
      }
    })
  ).toStrictEqual({ a: 'aa', b: [1, 2, 3], c: { a: 'aa', b: [1, 2, 3] } });
});

test(`calcSize object`, () => {
  expect(calcSize(`000`)).toBe('0.00MB');
  expect(calcSize({})).toBe('0.00MB');
});

test(`diffDate 1000ms`, () => {
  expect(diffDate(0, 1000)).toBe('1.00');
});

test(`diffDate invalid value`, () => {
  expect(diffDate(null, 1000)).toBe(null);
});

test(`sleep 1000ms`, async () => {
  const start = new Date();
  await sleep(1000);
  expect(diffDate(start)).toContain('1.0');
});

test(`arraySum`, () => {
  expect(arraySum([1, 3, 4])).toBe(8);
});

test(`clearString`, () => {
  expect(clearString('AAAAAA')).toBe('AAAAAA');
  expect(clearString('AAAAAA BBBBBB')).toBe('AAAAAA BBBBBB');
});

test(`uniqueArray`, () => {
  expect(uniqueArray([1, 3, 3, 3, 4])).toStrictEqual([1, 3, 4]);
});

test(`clearString`, () => {
  expect(clearString('AAA')).toBe('AAA');
});
