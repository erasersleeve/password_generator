// Assignment Code
var generateBtn = document.querySelector("#generate");
var valid = false 
var input = ""
var a = 0
var spch = ["@", "%", "+"]


// Write password to the #password input
function writePassword() {
  while (!valid) {
    input = prompt("How long would you like your password (must be between 8-128)?")
    a = parseInt(input)  
  if( a >= 8 && a <= 128) {
      // Do something
      
      valid = true
    } 
  else {
    // Do something else
    valid = false
    
    }
  }

  valid = false  
  // while (!valid) {
  //     input = confirm("Would you like special characters?")
  //   if (input == true) {
  //     var password = generatePassword(a, input);
  //     var passwordText = document.querySelector("#password");

  //     passwordText.value = password;
  //     valid = true
  //   }
  //  else {

  //   var password = generatePassword(a, input);
  //   var passwordText = document.querySelector("#password");

  //   passwordText.value = password;
  //   break
  //   }
  // }

  while (!valid) {
    input = confirm("Would you like special characters?")
    var password = generatePassword(a, input);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    valid = true;
  }
}


function generatePassword(par, par2 ) {
  var length = par,
      charset = "abcdefghijklmnopqrstuvwxyz",
      retVal = "";
  if (par2 == false) {
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  else {
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    retVal += spch[Math.floor(Math.random() * spch.length)];
    return retVal;
  }

}
  



// Add event listener to generate button to  run writePassword on click

generateBtn.addEventListener("click", writePassword); 



//criteria: length ( 8 -128), character types (upper lower special numbers)
// THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// prompt for the user input
//check if input is valid
//if valid set equal to true
//and proceed to next prompt







