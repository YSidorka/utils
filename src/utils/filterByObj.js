const { _filterByObj } = require('./_filter-by-obj');

function filterByObj(array, options) {
  return _filterByObj.call(array, options);
}
module.exports = { filterByObj };
