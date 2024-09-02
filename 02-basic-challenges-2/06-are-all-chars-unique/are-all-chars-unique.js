function areAllCharactersUnique(str) {
  let count = 0;
  const arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (loop(str[i], arr, count) > 1) {
      return false;
    } else {
      count = 0;
    }
  }
  return true;
}

function loop(str, arr, count) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == str) {
      count += 1;
    }
  }
  return count;
}

module.exports = areAllCharactersUnique;
