//Defined variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;


//Created a function to generate a random password

function generate() {
    var passwordLength = '';
//User is asked to put in their desired length
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Pick a password length between 8 to 128 characters");
        
    }
//User is asked more questins to use for their password
         var lowerCasePrompt = prompt ("Do you want your password to have lowercase?(Y/N)")
         if (lowerCasePrompt =="Y" )  {
          lowerSelection = true
        }

        var upperCasePrompt = prompt ("Do you want your password to have uppercase characters? (Y/N)")
        if (upperCasePrompt == "Y") {
            upperSelection = true
        } 

       
        var specialPrompt = prompt  ("Do you want your password to have special characters? (Y/N)")
        if (specialPrompt == "Y") {
            specialSelection = true
        } 

        var numericalPrompt = prompt  ("Do you want your password to have numerical values? (Y/N)")
        if (numericalPrompt == "Y") {
            numberSelection = true
        }
//If none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("Please select at least one character on your next attempt")
        }
    
//Generate random password
    var characters = '';

    if (lowerSelection ) {
        characters += lower
    }

    if (upperSelection) {

        characters += upper
    }
     if (numberSelection) {

        characters += numbers
     }
     if (specialSelection) {

        characters += special
     }
 

    pwd = password(passwordLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(passwordLength, characters) {
    var pwd = '';
    for (var i = 0; i < passwordLength; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
