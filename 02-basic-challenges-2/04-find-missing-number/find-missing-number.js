function findMissingNumber(arr) {
  const maxNum = Math.max(...arr);
  const arrMax = Array.from({ length: maxNum }, (_, i) => i + 1);

  for (let i = 0; i < arrMax.length; i++) {
    if (!arr.includes(arrMax[i])) {
      return arrMax[i];
    }
  }

  return null;
}

module.exports = findMissingNumber;
