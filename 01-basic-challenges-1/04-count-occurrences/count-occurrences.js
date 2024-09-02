function countOccurrences(a, b) {
  let occ = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      occ += 1;
    }
  }
  return occ;
}

module.exports = countOccurrences;
