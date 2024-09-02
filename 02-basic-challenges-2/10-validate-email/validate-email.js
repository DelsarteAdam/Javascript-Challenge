function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //verfie que lemail a toutes les conditions ok
  return emailRegex.test(email);
}

module.exports = validateEmail;
