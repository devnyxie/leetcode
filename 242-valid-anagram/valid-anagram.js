/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function sortString(str) {
        return str.split('').sort().join("");
    }
    if(sortString(s) == sortString(t) && s.length == t.length){
        return true
    }
    return false
};