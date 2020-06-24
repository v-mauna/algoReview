//Given an string str, create a function that returns a boolean, corresponding to whether that string is a 
//palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

function isPalIterative(str){
    while(str.length > 1){
      let first = str[0].toLowerCase();
      let last = str[str.length - 1].toLowerCase();
      if(first != last) return false
      str = str.slice(1, str.length - 2);
    }
    return true
  }