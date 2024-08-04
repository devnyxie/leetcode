/**
* @param {string} s
* @return {number}
*/

function firstUniqChar(s) {
    const charCount = new Array(128).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        charCount[charCode]++;
    }
        for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCount[charCode] === 1) {
            return i;
        }
    }
    return -1;
}