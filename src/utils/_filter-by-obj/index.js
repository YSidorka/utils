function _filterByObj(options) {
  const _self = this;
  if (!Array.isArray(_self)) return null;
  if (!options) return null;
  if (typeof options !== 'object') return null;
  const keys = Object.keys(options);
  if (!keys.length) return [];
  return _self.filter((item) =>
    keys.every(
      (key) => Object.prototype.hasOwnProperty.call(item, key) && item[key] === options[key]
    )
  );
}

module.exports = { _filterByObj };
