/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const charCountA = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        charCountA[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
        if (charCountA[index] === 0) {
            return false; 
        }
        charCountA[index]--;
    }

    return true;
};
