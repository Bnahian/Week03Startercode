//define variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;


//function to generate a random password

function generate() {
    var confirmLength = '';
//asking user to input desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("Pick a password length between 8 to 128 characters");
        
    }
//getting user input for which character types to use for the password
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
//if none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    
//generate random password
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
