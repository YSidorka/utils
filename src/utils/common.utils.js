function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

async function sleep(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

function calcSize(o) {
  const value = o && typeof o === 'string' ? o : JSON.stringify(o);
  return `${(value.length / 1000000).toFixed(2)}MB`;
}

function diffDate(startDate, endDate) {
  try {
    const startValue = startDate.valueOf();
    const endValue = endDate ? endDate.valueOf() : new Date().valueOf();

    return ((endValue - startValue) / 1000).toFixed(2);
  } catch (err) {
    return null;
  }
}

function uniqueArray(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

function clearString(str) {
  return str.length < 12 ? str : ` ${str}`.slice(1);
}

function arraySum(array) {
  let result = 0;
  array.forEach((item) => {
    result += item;
  });
  return result;
}

module.exports = {
  cloneObj,
  sleep,
  calcSize,
  diffDate,
  uniqueArray,
  clearString,
  arraySum
};
