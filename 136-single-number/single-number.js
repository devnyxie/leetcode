/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; // Apply XOR to all numbers
        // * XORing all numbers in the array means that pairs of the same number will cancel out to 0,
        // leaving only the single number that doesn't have a duplicate.
    }
    return result; // The single number
};