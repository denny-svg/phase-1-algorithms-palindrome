function isPalindrome(word) {
const lowercaseWord = word.toLowerCase();
const cleanedWord = lowercaseWord.replace(/[^a-z]/g, '');

//Comparing the cleaned word with its reverse
return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Pseudocode:
  1.Converting input word to lowercase
  2.Remove non-alphabetic characters from the lowercase word
  3.Compare the cleaned word with its reverse
  4.If the word, return true, else return false
*/

/*
  Written explanation of the solution
  The function, isPalindrome(), converts the input word to 
  lowercase, removes non-alphabetic characters, and checks 
  If the cleaned word is the same as its reverse. 
  Then returns true if the word is a palindrome and false if it is not.
  */
//A palindrome is a word, phrase, or sequence of characters that reads the same forward as backward.
// You can run node index.js to view these console logs

if (require.main === module) {
  // Test cases

console.log(isPalindrome('abba'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));
console.log(isPalindrome('a'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('wanjuiku'));
console.log(isPalindrome('T'));
console.log(isPalindrome('ab23'));

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

}
module.exports = isPalindrome;