const { getGCD } = require('./greatest-common-divisor');

test(`getNOD is function`, () => {
  expect(typeof getGCD).toBe('function');
});

test('NOD 96, 132, 144', () => {
  expect(getGCD([96, 132, 144])).toBe(12);
});

test('NOD 624960, 49104, 66960', () => {
  expect(getGCD([624960, 49104, 66960])).toBe(4464);
});

test('NOD 126 435 279', () => {
  expect(getGCD([126, 435, 279])).toBe(3);
});

test('NOD -1, 5', () => {
  expect(getGCD([-1, 5])).toBe(null);
});

test('NOD []', () => {
  expect(getGCD([])).toBe(null);
});

test('NOD "[]"', () => {
  expect(getGCD('[]')).toBe(null);
});

test('NOD 400, 100, 20, 80', () => {
  expect(getGCD([400, 100, 20, 80])).toBe(20);
});

test('NOD 24654, 25473, 954', () => {
  expect(getGCD([24654, 25473, 954])).toBe(3);
});

test('Invalid input', () => {
  expect(getGCD([null])).toBe(null);
  expect(getGCD([null, 5, 10, null])).toBe(null);
  expect(getGCD([-NaN, 5, NaN])).toBe(null);
  expect(getGCD([5, 1, 's'])).toBe(null);
  expect(getGCD([5.1, 1, 3])).toBe(null);
  expect(getGCD(3)).toBe(null);
});
