/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const lenH = haystack.length; // for example: sadbutsad (9)
    const lenN = needle.length; // for example: sad (3)
    // Iterate through haystack
    for (let i = 0; i <= lenH - lenN; i++) { // while less or equal to (6) in our example.
        // Check if the substring matches needle
        // if substring from i to i+lenN, for example: from index 0 to 3.
        if (haystack.substring(i, i + lenN) === needle) {
            return i;
        }
    }
    return -1; // no needle
};