function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Convert the input string into an array of characters.
  2. Reverse the array of characters.
  3. Convert the reversed array back into a string.
  4. Compare the reversed string with the original string.
  5. If they are the same, return true (indicating the word is a palindrome).
  6. If they are not the same, return false (indicating the word is not a palindrome).
*/

/*
  Add written explanation of your solution here
  The function `isPalindrome` takes a single argument, a string. It first reverses the string by splitting it into an array of characters, reversing the array, and then joining it back into a string. The function then compares the reversed string with the original string. If they are equal, it means the input string is a palindrome, and the function returns true. If they are not equal, the function returns false, indicating the input string is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
