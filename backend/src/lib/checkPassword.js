const checkPassword = function (password) {
  let theLength = /^.{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    numbers = /[0-9]/,
    special = /[!"#$%&'()*+,\-/:;<=>?@[\\\]^_`{|}~]/;

  if (
    theLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    numbers.test(password) &&
    special.test(password)
  ) {
    return true;
  }
  return false;
};

console.log(checkPassword('Someone@1'));

module.exports = checkPassword;
