function reverseString(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr[str.length - i] = str[i];
  }

  return arr.join("");
}

module.exports = reverseString;
