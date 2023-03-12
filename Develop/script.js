// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var criteriaBoolean = [true, true, true, true];
  var confirmString = ["Would you like to include lowercase characters?", "Would you like to include uppercase characters?", "Would you like to include numbers?", "Would you like to include special characters?"];
  const keys = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{][:;?><,./-=",
  }
  var checkBool = true;

  //Selecting Criteria for Password
  alert("Please select the criteria for your password");
  do {
    var counter = 0;
    for(var i = 0; i < confirmString.length; i++) {
      if(confirm(confirmString[i])) {
        criteriaBoolean[i] = true;
      } else {
        criteriaBoolean[i] = false;
        counter++;
      }
    }
    if(counter == confirmString.length) {
      alert("You must select at least one character type.");
      checkBool = true;
    } else {
      checkBool = false;
    }
  } while (checkBool == true);

  //PasswordLength 
  checkBool = true;
  var passwordLength;
  do {
    passwordLength = prompt("Enter the length of your password below:");
    if(passwordLength > 128 || password < 8) {
      alert("Length must be between 8 and 128 characters.");
      checkBool = true;
    } else {
      checkBool = false;
    }
  } while (checkBool == true);

  
  //GeneratePassword
  var password = "";
  var randomKey = "";

  for(var i = 0; i < passwordLength; i++) {
    if(criteriaBoolean[0] == true) {
      placeKey = keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaBoolean[1] == true) {
      placeKey = keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaBoolean[2] == true) {
      placeKey = keys.number[Math.floor(Math.random() * keys.number.length)];
      randomKey = randomKey.concat(placeKey);
    }
    if(criteriaBoolean[3] == true) {
      placeKey = keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
      randomKey = randomKey.concat(placeKey);
    }
    characterToAdd = randomKey[Math.floor(Math.random() * randomKey.length)];
    password += characterToAdd;
  }
  return(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
