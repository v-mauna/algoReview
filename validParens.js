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

const bracketPattern = /[[\](){}]/g;
const bracketPairs = { //keeps track of the possible bracket pairings
  '[' : ']',
  '(' : ')',
  '{' : '}'
};

function hasBalancedBrackets (inputString) {
  const inputBrackets = inputString.match(bracketPattern); // returns an array of all the brackets in the input
  const brackets = [];
  if (!inputString.length || !inputBrackets.length) {
    return true; // empty input or no brackets i.e. 'balanced' (throwing an error is fine also)
  }
  inputBrackets.forEach(function (bracket) {
    const lastBracket = brackets[brackets.length - 1];
    if (bracketPairs[lastBracket] === bracket) { // the current bracket and the last bracket are a pair
      brackets.pop(); // we found a pair so remove the opening bracket from the array and move on
    } else {
      brackets.push(bracket);
    }
  });
  return brackets.length === 0; // if the brackets were balanced then we should not have any brackets in the array
}