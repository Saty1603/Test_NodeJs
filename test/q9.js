function checkPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(checkPalindrome("radar")); 
  