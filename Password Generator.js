var generatePasswordButtonElement = document.querySelector("#generate-button");
var generatePasswordTextAreaElement = document.querySelector("#generated-password");

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(lowercaseCharacters);
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXWZ".split("");
// console.log(uppercaseCharacters);
var numberCharaters = "0123456789".split("");
// console.log(numberCharaters);
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
// console.log(specialCharacters);


function getPasswordInputs() {
    var passwordLength = prompt("How many characters do you want in your password? (Min: 8, Max: 128)");
    // console.log(passwordLength);

    passwordLength = parseInt(passwordLength);
    // console.log(passwordLength);

    if (isNaN(passwordLength) === true) {
        alert("☠Come on! Lenght must be a number!☠");
        return undefined;
    }

    if (passwordLength < 8){
        alert ("☠Hey Lenght must be 8 or more!☠");
        return undefined;
    }

    if (passwordLength > 128){
        alert("☠Hey Lenght must be 128 or less!☠");
        return undefined;
    }
    
    var lowercase = confirm("Do you want lowercase characters 👇 in your password?");
    // console.log("Lowercase: " + lowercase);

    var uppercase = confirm("Do you want uppercase characters ☝ in your password?");
    // console.log(" Uppercase: " + uppercase);

    var numbers = confirm("Do you want numbers # in your password?");
    // console.log("Numbers: " + numbers);

    var special = confirm("Do you want special characters ✨ in your password?");
    // console.log(" Special: " + special);

    if (lowercase === false &&
        uppercase === false &&
        numbers === false && 
        special === false) {
            alert("☠You must select at least one character type.☠");
            return undefined;
        }

    return {
        passwordLength: passwordLength,
        lowercase: lowercase,
        uppercase: uppercase,
        numbers: numbers,
        special: special
    };
}

function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomCharacter = array[randomIndex];
    return randomCharacter;
}

generatePasswordButtonElement.addEventListener("click",function() {
    // console.log("generate password button clicked");
    var inputs = getPasswordInputs();
    console.log(inputs)

    if (inputs === undefined) {
        return;
    }
  
    // resulting password
    var result = [];
 
    //concat array (useded to merge 2 array)
    var allowedCharacters = [];
     
    // set of guaranteed characters to be included in the password
    var guaranteedCharacters = [];
//    
    if (inputs.lowercase === true) {
        allowedCharacters = allowedCharacters.concat(lowercaseCharacters);
        var randomCharacter = getRandom(lowercaseCharacters);
        guaranteedCharacters.push(randomCharacter);
    }

    if (inputs.uppercase === true) {
        allowedCharacters = allowedCharacters.concat(uppercaseCharacters);
        var randomCharacter = getRandom(uppercaseCharacters);
        guaranteedCharacters.push(randomCharacter);
    }

    if (inputs.numbers === true) {
        allowedCharacters = allowedCharacters.concat(numberCharaters);
        // var randomCharacter = getRandom(numberCharacters);
        guaranteedCharacters.push(randomCharacter);
    }
    
    if (inputs.special === true) {
        allowedCharacters = allowedCharacters.concat(specialCharacters);
        var randomCharacter = getRandom(specialCharacters);
        guaranteedCharacters.push(randomCharacter);
    }
//
    // console.log(allowedCharacters);
    console.log("Guaranteed Characters", guaranteedCharacters);

    for (var i = 0; i < inputs.passwordLength; i++){
        // pick a random character
        var randomCharacter = getRandom(allowedCharacters);
        // console.log("Random Character: " + randomCharacter);
        // result = result + randomCharacter;
        // result += randomCharacter;
        result.push(randomCharacter);
    }

    for (var j = 0; j < guaranteedCharacters.length; j++) {
        console.log("j: " + j);
        console.log(result[j]);
        console.log(guaranteedCharacters[j]);
        result[j] = guaranteedCharacters[j];
    }
    
    result = result.join("");
    
    console.log("Resulting password: " + result);

    generatePasswordTextAreaElement.value = result;
});
