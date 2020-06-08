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

  //tells the password to replace "your password here"
  passwordText.value = password;

}


//The generator first gathers user input via a series of prompts and confirms. As long as one parameter has been chosen the generator will begin. 
//It then generates the password by rolling a random number from 0 to 3. This number represents one of our 4 possible character selections, and a value is then chosen from that selection.
//This reduces the risk that a character group is under represented and the while loop of the fetch function ensures we have the right number of characters.

function generatePassword () {
  // By default we assume the user wants nothing. User inputs will change that status as necessary
  var lowerConfirm = false;
  var upperConfirm = false;
  var numberConfirm = false;
  var specConfirm = false;
  //Need to add a blank var as a placeholder 
  var placepass = "";

//Prompt to ask for length. If the length is not a valid input an alert tells the user and the readonly area asks the user to try again
  var passLength = prompt("How long would you like your password to be? (Valid entry between 8 and 128")
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a valid password length (between 8 and 128)")
    return "Please try again with a password length between 8 and 128 characters"
  }

  //To stop the generator from running without proper parameters we use a while loop
  var run = true;
  while (run){
    lowerConfirm = preferences(lowerConfirm, "lowercase");
    upperConfirm = preferences(upperConfirm, "uppercase");
    numberConfirm = preferences(numberConfirm, "numbers");
    specConfirm = preferences(specConfirm, "special characters")
    if (lowerConfirm || upperConfirm || numberConfirm || specConfirm) {
    run = false;
    }
    else {  
      alert("Please select at least one parameter")

    }
  }


  //Generate password
  for (var i=0; i < passLength; i++) {
    //Builds a string one character at a time for each iteration
    placepass += fetchChar(lower, lowerConfirm, upper, upperConfirm, number, numberConfirm, spec, specConfirm);
  }
  return placepass;  

    
}
//function to determine user preferences
function preferences(par1, par2) {
  par1 = confirm("Would you like " + par2 + " in your password?");
  return par1;
}

//function to fetch applicable characters. It uses a while loop to ignore undesired characters while maintaining password length.
function fetchChar(lower, lowerConfirm, upper, upperConfirm, number, numberConfirm, spec, specConfirm) {
 var char = "";
 var fetcher = true;
 while (fetcher) {
  var random = (Math.floor(Math.random() * 4)); 
  if (random == 0 && lowerConfirm) {
  char = lower.charAt(Math.floor(Math.random() * lower.length));
  fetcher = false;
  console.log(char);
  }
  if (random == 1 && upperConfirm) {
    char = upper.charAt(Math.floor(Math.random() * upper.length));
    fetcher = false;
    console.log(char);
  }
  if (random == 2 && numberConfirm) {
    char = number.charAt(Math.floor(Math.random() * number.length));
    fetcher = false;
    console.log(char);
  }
  if (random == 3 && specConfirm) {
    char = spec.charAt(Math.floor(Math.random() * spec.length));
    fetcher = false;
    console.log(char);
  }  

 }

 return char
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
