const Module = require('./constants');

test(`Time constants`, () => {
  expect(Module.SECOND).toBe(1000);
  expect(Module.MINUTE).toBe(60000);
  expect(Module.HOUR).toBe(3600000);
  expect(Module.DAY).toBe(86400000);
  expect(Module.WEEK).toBe(604800000);
});
