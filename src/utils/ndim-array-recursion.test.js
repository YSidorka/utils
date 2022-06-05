const { createNDimArray } = require('./ndim-array-recursion');

test(`create10DimArray is function`, () => {
  expect(typeof createNDimArray).toBe('function');
});

test(`2-dim`, () => {
  expect(createNDimArray([2, 2], 0)).toStrictEqual([
    [0, 0],
    [0, 0]
  ]);

  expect(createNDimArray([2, 3], 1)).toStrictEqual([
    [1, 1, 1],
    [1, 1, 1]
  ]);

  expect(createNDimArray([3, 2])).toStrictEqual([
    [null, null],
    [null, null],
    [null, null]
  ]);
});

test(`3-dim`, () => {
  expect(createNDimArray([2, 2, 2], 0)).toStrictEqual([
    [
      [0, 0],
      [0, 0]
    ],
    [
      [0, 0],
      [0, 0]
    ]
  ]);

  expect(createNDimArray([3, 2, 2], 0)).toStrictEqual([
    [
      [0, 0],
      [0, 0]
    ],
    [
      [0, 0],
      [0, 0]
    ],
    [
      [0, 0],
      [0, 0]
    ]
  ]);

  expect(createNDimArray([3, 3, 2], 0)).toStrictEqual([
    [
      [0, 0],
      [0, 0],
      [0, 0]
    ],
    [
      [0, 0],
      [0, 0],
      [0, 0]
    ],
    [
      [0, 0],
      [0, 0],
      [0, 0]
    ]
  ]);
});

test(`invalid-dim`, () => {
  expect(createNDimArray(2, 2)).toStrictEqual(null);
  expect(createNDimArray([], 0)).toStrictEqual(null);
});
