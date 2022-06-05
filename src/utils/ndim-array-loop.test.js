const NDimLoop = require('./ndim-array-loop');
const NDimRecursion = require('./ndim-array-recursion');

test(`create10DimArray is function`, () => {
  expect(typeof NDimLoop.createNDimArray).toBe('function');
});

test(`create N-Dim array`, () => {
  expect(NDimLoop.createNDimArray([])).toStrictEqual(null);
  expect(NDimLoop.createNDimArray([2], 0)).toStrictEqual([0, 0]);
  expect(NDimLoop.createNDimArray([2, 2])).toStrictEqual([
    [null, null],
    [null, null]
  ]);

  expect(NDimLoop.createNDimArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)).toStrictEqual([[[[[[[[[[5]]]]]]]]]]);

  expect(NDimLoop.createNDimArray([2], 5)).toStrictEqual([5, 5]);
  expect(NDimLoop.createNDimArray([2, 2], 5)).toStrictEqual([
    [5, 5],
    [5, 5]
  ]);
});

test(`create 3-Dim array`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2])).toStrictEqual([
    [
      [null, null],
      [null, null]
    ],
    [
      [null, null],
      [null, null]
    ]
  ]);
});

test(`create 3-Dim array VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2])).toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2]));
});

test(`create 4-Dim array`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2], 0)).toStrictEqual([
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ],
    [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ]
  ]);
});

test(`create 4-Dim VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2], 0));
});

test(`create 5-Dim array VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2], 0));
});

test(`create 6-Dim array`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2, 2], 0));
});

test(`create 7-Dim array`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2, 2, 2], 0));
});

test(`create 8-Dim array VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2], 0));
});

test(`create 9-Dim array VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2, 2], 0));
});

test(`create 10-Dim array VS NDimRecursion`, () => {
  expect(NDimLoop.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0))
    .toStrictEqual(NDimRecursion.createNDimArray([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0));
});
