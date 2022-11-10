// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowers = 'abcdefghijklmnopqrstuvwxyz';
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var symbois = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

var length = parseInt(prompt('How many characters would you like for your password?'));
while (length < 8 || length > 128) {
  length = parseInt(prompt('Please try again! Integer in 8 ~ 128'));
}
var hasLowers = confirm('Click OK to confirm including lowercase characters.');
var hasUppers = confirm('Click OK to confirm including uppercase characters.');
var hasNumbers = confirm('Click OK to confirm including numeric characters.');
var hasSymbois = confirm('Click OK to confirm including special characters.');
while (false == (hasLowers || hasUppers || hasNumbers || hasSymbois)) {
  var hasLowers = confirm('Please select at least one character type,Click OK to confirm including lowercase characters.');
  var hasUppers = confirm('Please select at least one character type,Click OK to confirm including uppercase characters.');
  var hasNumbers = confirm('Please select at least one character type,Click OK to confirm including numeric characters.');
  var hasSymbois = confirm('Please select at least one character type,Click OK to confirm including special characters.');
}

function select(hasLowers, hasUppers, hasNumbers, hasSymbois) {
  let types = [];

  if (hasLowers == true) {
    types.push(getLowers());
  }
  if (hasUppers == true) {
    types.push(getUppers());
  }
  if (hasNumbers == true) {
    types.push(getNumbers());
  }
  if (hasSymbois == true) {
    types.push(getSymbois());
  }

  return types[Math.floor(Math.random() * types.length)];
}

function getLowers() {
  return lowers[Math.floor(Math.random() * lowers.length)];
}

function getUppers() {

  return uppers[Math.floor(Math.random() * uppers.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbois() {
  return symbois[Math.floor(Math.random() * symbois.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var generatePassword = '';
  for (i = 0; i < length; i++) {
    generatePassword += select(hasLowers, hasUppers, hasNumbers, hasSymbois);
  }
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
