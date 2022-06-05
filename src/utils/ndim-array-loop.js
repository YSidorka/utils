function createNDimArray(arrayParams, defaultValue = null) {
  if (!Array.isArray(arrayParams) || arrayParams.length <= 0) return null;

  const result = [];
  for (let i0 = 0; i0 < arrayParams[0]; i0 += 1) {
    result.push(defaultValue);

    for (let i1 = 0; i1 < arrayParams[1]; i1 += 1) {
      if (result[i0] === defaultValue) result[i0] = [];
      result[i0].push(defaultValue);

      for (let i2 = 0; i2 < arrayParams[2]; i2 += 1) {
        if (result[i0][i1] === defaultValue) result[i0][i1] = [];
        result[i0][i1].push(defaultValue);

        for (let i3 = 0; i3 < arrayParams[3]; i3 += 1) {
          if (result[i0][i1][i2] === defaultValue) result[i0][i1][i2] = [];
          result[i0][i1][i2].push(defaultValue);

          for (let i4 = 0; i4 < arrayParams[4]; i4 += 1) {
            if (result[i0][i1][i2][i3] === defaultValue) result[i0][i1][i2][i3] = [];
            result[i0][i1][i2][i3].push(defaultValue);

            for (let i5 = 0; i5 < arrayParams[5]; i5 += 1) {
              if (result[i0][i1][i2][i3][i4] === defaultValue) result[i0][i1][i2][i3][i4] = [];
              result[i0][i1][i2][i3][i4].push(defaultValue);

              for (let i6 = 0; i6 < arrayParams[6]; i6 += 1) {
                if (result[i0][i1][i2][i3][i4][i5] === defaultValue)
                  result[i0][i1][i2][i3][i4][i5] = [];
                result[i0][i1][i2][i3][i4][i5].push(defaultValue);

                for (let i7 = 0; i7 < arrayParams[7]; i7 += 1) {
                  if (result[i0][i1][i2][i3][i4][i5][i6] === defaultValue)
                    result[i0][i1][i2][i3][i4][i5][i6] = [];
                  result[i0][i1][i2][i3][i4][i5][i6].push(defaultValue);

                  for (let i8 = 0; i8 < arrayParams[8]; i8 += 1) {
                    if (result[i0][i1][i2][i3][i4][i5][i6][i7] === defaultValue)
                      result[i0][i1][i2][i3][i4][i5][i6][i7] = [];
                    result[i0][i1][i2][i3][i4][i5][i6][i7].push(defaultValue);

                    for (let i9 = 0; i9 < arrayParams[9]; i9 += 1) {
                      if (result[i0][i1][i2][i3][i4][i5][i6][i7][i8] === defaultValue)
                        result[i0][i1][i2][i3][i4][i5][i6][i7][i8] = [];
                      result[i0][i1][i2][i3][i4][i5][i6][i7][i8].push(defaultValue);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  createNDimArray
};
