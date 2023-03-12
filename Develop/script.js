// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function selectCriteria(){
  var criteriaBoolean = [true, true, true, true];
  var confirmString = ["Would you like to include lowercase characters?", "Would you like to include uppercase characters?", "Would you like to include numbers?", "Would you like to include special characters?"];
  var checkBool = true;
  alert("Please select the criteria for your password");
  do {  //asks set of criteria and recieves true or false input from user
    var counter = 0;
    for(var i = 0; i < confirmString.length; i++) {
      if(confirm(confirmString[i])) {
        criteriaBoolean[i] = true;
      } else {
        criteriaBoolean[i] = false;
        counter++;
      }
    }

    if(counter == confirmString.length) {  //returns loop to beginning if program recieves all false input from user
      alert("You must select at least one character type.");
      checkBool = true;
   } else {
      checkBool = false;
   }
 } while (checkBool == true);
 return criteriaBoolean;
}

function getPasswordLength() {
  var passwordLength;
  var checkBool = true;
  do {  //recieves password length input from user
    passwordLength = prompt("Enter the length of your password below:");
    if(passwordLength > 128 || password < 8) {
      alert("Length must be between 8 and 128 characters.");
      checkBool = true;
    } else {
      checkBool = false;
    }
  } while (checkBool == true);
  return passwordLength;
}

function generatePassword() {
  var criteriaData = selectCriteria();
  var pLength = getPasswordLength();
  var password = "";
  var randomKey = "";
  const keys = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{][:;?><,./-=",
  }
  for(var i = 0; i < pLength; i++) { //chooses a random character from a temporary key that only includes character types the user specified
    if(criteriaData[0] == true) {
      placeKey = keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaData[1] == true) {
      placeKey = keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaData[2] == true) {
      placeKey = keys.number[Math.floor(Math.random() * keys.number.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaData[3] == true) {
      placeKey = keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
      randomKey = randomKey.concat(placeKey);
    }
    password += randomKey[Math.floor(Math.random() * randomKey.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
