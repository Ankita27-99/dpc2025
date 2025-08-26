function isValid(s) {
  if (s.length % 2 !== 0) return false;

  let stack = [];

  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (map[char]) {
      let topElement = stack.pop();
      if (map[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));      
console.log(isValid("([)]"));    
console.log(isValid("[{()}]")); 
console.log(isValid(""));       
console.log(isValid("{[}"));    
console.log(isValid("("));      
console.log(isValid("]"));      
