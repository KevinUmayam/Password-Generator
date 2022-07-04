// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays...find location

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sepecialC = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "~",
  "?",
  "/",
  "+",
  "-",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//generatePassword function
function generatePassword() {
  let passwordList = [];
  let pwLength = prompt("How long do you want your password to be?");
  let pW = "";

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Password needs to be atleast 8 characters and no more than 128.");
    pwLength = prompt("How long would you like your password to be?");
  }
  const lowerLetters = confirm("Do you want lowercase letters?");
  if (lowerLetters) {
    passwordList = passwordList.concat(lowerCase);
    console.log(passwordList);
  }
  const upperLetters = confirm("Do you want uppercase letters?");
  if (upperLetters) {
    passwordList = passwordList.concat(upperCase);
    console.log(passwordList);
  }
  const numbersC = confirm("Do you want numbers?");
  if (numbersC) {
    passwordList = passwordList.concat(numbers);
    console.log(passwordList);
  }
  const sepecialCharacters = confirm("Do you want special characters letters?");
  if (sepecialCharacters) {
    passwordList = passwordList.concat(sepecialC);
    console.log(passwordList);
  }
  if (passwordList.length === 0) {
    alert("no characters were selected");
    return "";
  }

  // if (array == undefined) {
  //   alert("No preferences were selected");
  //   pwLength = prompt("How long would you like your password to be?");
  // }
  for (let index = 0; index < pwLength; index++) {
    let randomChar = Math.floor(Math.random() * passwordList.length);
    pW = pW.concat(passwordList[randomChar]);
  }

  return pW;
}

// return the tailored password with "return"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
