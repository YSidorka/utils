function createNDimArrayRecursion(arrayParams, defaultValue = null) {
  // validation
  if (!Array.isArray(arrayParams) || arrayParams.length <= 0) return null;

  // process
  return recursion(arrayParams, defaultValue);
}

function recursion(arrayParams, defaultValue) {
  if (!Array.isArray(arrayParams) || arrayParams.length <= 0) return defaultValue;
  const size = arrayParams[0];
  const params = arrayParams.slice(1);
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(recursion(params, defaultValue));
  }
  return result;
}

module.exports = {
  createNDimArray: createNDimArrayRecursion
};
