/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert s
    const filtered = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    // reverse the string to validate the palindrome
    let start = 0;
    let end = filtered.length - 1;
    while (start < end) {
        if (filtered[start] !== filtered[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
};