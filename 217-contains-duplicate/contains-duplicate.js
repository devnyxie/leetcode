/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueSet = new Set(); // a set of unique elems
    for(let i=0; i<nums.length; i++){
        if(uniqueSet.has(nums[i])){
            return true
        }
        uniqueSet.add(nums[i])
    }
    return false
};