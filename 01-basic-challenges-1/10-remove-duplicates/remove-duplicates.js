function removeDuplicates(arr) {
  let dupArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!dupArr.includes(arr[i])) {
      dupArr.push(arr[i]);
    }
  }

  return dupArr;
}

module.exports = removeDuplicates;
