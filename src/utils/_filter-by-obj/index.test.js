const _filterByObj = require('./index');

const arr = [
  { domain: 'qq', type: 'page', value: 20 },
  { domain: '22', type: 'page', value: 20 },
  { domain: 'qq', type: 'page', value: 1 },
  { domain: 'qq', value: 10 }
];

const cases = [
  {
    array: arr,
    filter: { type: 'page', domain: 'qq' },
    output: [
      { domain: 'qq', type: 'page', value: 20 },
      { domain: 'qq', type: 'page', value: 1 }
    ]
  },
  {
    array: [{ a: 1 }, { a: '1' }],
    filter: { a: 1 },
    output: [{ a: 1 }]
  }
];

test('_filterByObj is function', () => {
  expect(typeof _filterByObj).toBe('function');
});

test('_filterByObj success cases', () => {
  expect(_filterByObj.call(cases[0].array, cases[0].filter)).toStrictEqual(cases[0].output);
  expect(_filterByObj.call(cases[1].array, cases[1].filter)).toStrictEqual(cases[1].output);
});

test('_filterByObj invalid cases', () => {
  expect(_filterByObj.call(null)).toStrictEqual(null);
  expect(_filterByObj.call([])).toStrictEqual(null);
  expect(_filterByObj.call(arr, 'page')).toStrictEqual(null);
  expect(_filterByObj.call(arr, {})).toStrictEqual([]);
});
