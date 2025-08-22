function reverseWords(s) {
    let words = s.trim().split(/\s+/);

    words.reverse();

    return words.join(" ");
}


console.log(reverseWords("the sky is blue"));       
console.log(reverseWords("  hello world  "));       
console.log(reverseWords("a good   example"));      
console.log(reverseWords("    "));                  
console.log(reverseWords("word"));                  
