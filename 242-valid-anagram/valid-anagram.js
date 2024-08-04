/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function sortString(str) {
        const array = str.split('');
        array.sort();
        const sortedStr = array.join('');
        return sortedStr;
    }
    const s_s = sortString(s);
    const t_s = sortString(t);
    if(s_s == t_s && s_s.length == t_s.length){
        return true
    }
    return false
};