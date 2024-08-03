/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    function reverse(start, end) {
        while (start < end) {
            // Swap elements
            let tempStart = s[start]; 
            s[start] = s[end];
            s[end] = tempStart;
            start++;
            end--;
        }
    }
    reverse(0, s.length -1 )
};