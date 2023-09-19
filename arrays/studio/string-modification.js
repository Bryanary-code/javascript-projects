const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.replace('Lau', '') + 'Lau'
console.log(str)
console.log(newStr)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Through the magic of methods, ${str} was modified to ${newStr}.`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("How many letters would you like to move? ")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters > str.length) {
numOfLetters = 3
console.log(`Invalid response. Amount exceeds number of letters in the word.`)
}