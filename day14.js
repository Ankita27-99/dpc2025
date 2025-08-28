function countSubstringsWithKDistinct(s, k) {
    if (k > s.length) return 0;

    function atMostK(s, k) {
        let left = 0, count = 0;
        let freq = new Map();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            freq.set(char, (freq.get(char) || 0) + 1);

            while (freq.size > k) {
                let leftChar = s[left];
                freq.set(leftChar, freq.get(leftChar) - 1);
                if (freq.get(leftChar) === 0) {
                    freq.delete(leftChar);
                }
                left++;
            }

            count += (right - left + 1);
        }

        return count;
    }

    return atMostK(s, k) - atMostK(s, k - 1);
}

console.log(countSubstringsWithKDistinct("pqpqs", 2));  
console.log(countSubstringsWithKDistinct("aabacbebebe", 3)); 
console.log(countSubstringsWithKDistinct("a", 1)); 
console.log(countSubstringsWithKDistinct("abc", 3));
console.log(countSubstringsWithKDistinct("abc", 2));
console.log(countSubstringsWithKDistinct("aaaa", 1));
console.log(countSubstringsWithKDistinct("abc", 4)); 
