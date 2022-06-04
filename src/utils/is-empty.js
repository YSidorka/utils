function isEmpty(value) {
  if (value === null) return true;
  if (value === undefined) return true;
  if (typeof value === 'string') return !value.length;

  if (value) {
    if (Array.isArray(value)) return !value.length;
    if (typeof value === 'object') {
      const isEmptyObj = Object.keys(value).every(
        (key) => !Object.prototype.hasOwnProperty.call(value, key)
      );
      if (!isEmptyObj) return false;
    }
    if (typeof value === 'function') return false;
  }
  return true;
}


module.exports = {
  isEmpty
};
