function isValid(x) {
  const matchingBrackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  const stack = [];
  for (const char of x) {
    if (matchingBrackets[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
        if (Object.values(matchingBrackets).includes(char)) {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || matchingBrackets[stack.pop()] !== char) {
                return false; // Mismatch found
            }
        }
      } 
  }
  // If the stack is empty, all opening brackets have matching closing brackets
  return stack.length === 0;
}