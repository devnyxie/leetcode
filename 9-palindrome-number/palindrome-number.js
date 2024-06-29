/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = x.toString()
    if(stringX.length > 1 || !/[+\-.,]/.test(stringX)){
        const reversedStringX = stringX.split('').reverse().join('');
        if(stringX == reversedStringX){
            return true;
        }
    }
    return false;
};