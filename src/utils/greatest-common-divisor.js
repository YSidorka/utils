// get greatest common divisor (GCD)
function getGCD(array) {
  if (!Array.isArray(array) || array.length <= 0) return null;

  let min = Math.min(...array);
  if (!min || min <= 0) return null;

  const isAllNatural = array.every((value) => value % 1 === 0);
  if (!isAllNatural) return null;

  let _array = array;

  while (_array.length) {
    let _min = min;
    _array = _array
      .map((value) => {
        const mod = value % min;
        if (mod > 0 && _min > mod) _min = mod;
        return mod;
      })
      .filter((value) => value);

    // update minimum
    if (_array.length) {
      _array.push(min);
      min = _min;
    }
  }

  return min;
}

module.exports = {
  getGCD
};
