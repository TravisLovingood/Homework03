
var generateBtn = document.querySelector("#confirmPassword");
var generateBtn = document.querySelector("#uppercase");
var generateBtn = document.querySelector("#symbols");
var generateBtn = document.querySelector("#numbers");
var generateBtn = document.querySelector("#generate");
function writePassword(){
// validate the fields (?s)
//"Do u need a password?"
  if( confirmPassword == "Yes"); {
    charcters = ("abcdefghijklmnopqrstuvwxyz");
}//"Do you like uppercase?"
  if( uppercase == "Yes") {
    charcters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
} else {charcters = ("abcdefghijklmnopqrstuvwxyz");
}//"Do you like Symbols?"
  if( symbols == "Yes") {
    charcters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
} else {charcters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}//"what about numbers, do you like them?"
  if ( numbers == "Yes") {
    charcters =("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+<>?");
} else {charcters =("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")}
// edited  from orginal //
var chars = "charcters"
var string_length = 128;
var randomstring = '';
var charCount = 0;
var numCount = 0;
var password = generatePassword();
var passwordText = document.querySelector("#password");
for (var i=0; i<string_length; i++) {
  // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value. 
  if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
      var rnum = Math.floor(Math.random() * 10);
      randomstring += rnum;
      numCount += 1;
  } else {
      // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
      charCount += 1;
  }
}
  return = passwordText.value = "password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


////////tryed add an array?////////
// var styles = ["uppercase","lowercase","symbals","numbers",];

////////tryed add strings/////////
// var abc = "abcdefghijklmnopqrstuvwxyz"
// var numbers = "1234567890"
// var symbals = "!@#$%^&*()_+<>?"
// var len = abc.length;
// abc.toUpperCase();             
// abc.toLowerCase();
  
// var randomstring="";
// for ( var i = 0; i < stringlength; i++ ) {
  // var rnum = Math.floor(Math.random() * characters.length);
  // randomstring += characters.substring(rnum,rnum+1)
}
// return result;

// for (var i=0; i<string_length; i++) { 
//       if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
//           var rnum = Math.floor(Math.random() * 10);
//           randomstring += rnum;
//           // numCount += 1;
//       } else {
//           var rnum = Math.floor(Math.random() * chars.length);
//           randomstring += chars.substring(rnum,rnum+1);
//           charCount += 1;
//       }
//   }