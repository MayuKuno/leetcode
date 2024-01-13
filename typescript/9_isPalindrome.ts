// Description
// https://leetcode.com/problems/palindrome-number/description/


// My Answer
function isPalindrome(x: number) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
      return false;
  }
  let reversed = 0;
  while (x > reversed) {
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
  }
  return reversed === x || x == Math.floor(reversed / 10)
}