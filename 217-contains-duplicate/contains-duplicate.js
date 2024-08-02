/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueSet = new Set();
    for(let i=0; i<nums.length; i++){
        const currVal = nums[i]
        if(uniqueSet.has(currVal)){
            return true
        }
        uniqueSet.add(currVal)
    }
    return false
};