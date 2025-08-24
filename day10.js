function groupAnagrams(strs) {
    let map = {};

    for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }

    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams([""]));

console.log(groupAnagrams(["a"]));

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"]));

console.log(groupAnagrams(["abc", "def", "ghi"]));
