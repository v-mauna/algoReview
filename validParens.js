var isValid = function(s) {
    if (s.length%2 != 0) //if there is an odd number of symbols, must be false since we have an unmatched pair.
      return false;
      
    let brackets = {  //left brackets as keys, right as their respective values
      "(":")",
      "{":"}",
      "[":"]"
     }
     
    let stack = [];
    for (i=0; i<s.length; i++) {
       if(brackets[s[i]]) // matches a left bracket, so add to top of stack
         stack.unshift(s[i]);
     else if (s[i] != brackets[stack.shift()]) // not a left bracket, so if doesn't match top of stack, badly nested
       return false;
    }
    return (stack.length==0); // make sure all elements have been removed from the stack, else return false
  };