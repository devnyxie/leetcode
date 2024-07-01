/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const oddNums = [];
    for(i=0; i < arr.length; i++){
        if(arr[i] % 2 == 0){ //if even
            oddNums.length = 0;
        } else {
            oddNums.push(arr[i])
            if(oddNums.length == 3){
                return true;
            }
        }
    }
    return false;
};