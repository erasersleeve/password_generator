// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number="0123456789";
var spec="@%+\\/\'!#$^?:,)(}{][~-_.";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword () {
  // By default we assume the user wants nothing. User inputs will change that status as necessary
  var lowerConfirm = false;
  var upperConfirm = false;
  var numberConfirm = false;
  var specConfirm = false;
  //Need to add a blank var as a placeholder 
  var placepass = "";
//First step is to collect user preferences

//Prompt to ask for length. If the length is not a valid input an alert tells the user and the readonly area asks the user to try again
  var passLength = prompt("How long would you like your password to be? (Valid entry between 8 and 128")
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a valid password length (between 8 and 128)")
    return "Please try again with a password length between 8 and 128 characters"
  }

//Generate password
for(var x=0; x < passLength; x++){
  //Builds a string one character at a time for each iteration
  tempPass += fetchChar(lowerCaseAlpha,upperCaseAlpha,numbers,specialChar,wouldLikeLC,wouldLikeUP,wouldLikeNumb,wouldLikeSpecChar);
}
return tempPass;  

    
}
//function to fetch applicable characters
function fetchChar() {
 var char = ""
 var fetcher = true
 while (fetcher) {
  var random = (math.floor(math.random() * 4));
  if (random == 0 && lowerConfirm) {
  char = lower.charAt(Math.floor(Math.random() * lower.length));
  }
  else if (random == 1 && upperConfirm) {
  char = upper.charAt(Math.floor(Math.random() * upper.length));
  }
  else if (random == 2 && numberConfirm) {
  char = number.charAt(Math.floor(Math.random() * number.length));
  }
  else if (random == 3 && specConfirm) {
  char = spec.charAt(Math.floor(Math.random() * spec.length));
  }

 }

 return char
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
