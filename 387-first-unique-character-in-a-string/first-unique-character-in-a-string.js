/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashmap = {};

    for (let char of s) {
        if (hashmap[char] === undefined) {
            hashmap[char] = 1;
        } else {
            hashmap[char]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (hashmap[s[i]] === 1) {
            return i;
        }
    }

     return -1;
};