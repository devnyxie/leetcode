/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // example nums: [7,6,5,4,3,2,1]
    // example k: 3
    k = k % nums.length;
    //reverse a portion of the array
    function reverse(start, end) {
        // [7,6,5,4,3,2,1]
        // How it works:
        // First itr: swap 1 and 7, end: start = 1, end = 5
        // Second itr: swap 2 and 6, end: start = 2, end = 4
        // Third itr: swap 3 and 5, end: start = 3, end = 3
        // Fourth itr: start (3) is not less than end (3), so loop ends
        while (start < end) {
            // Swap elements
            let tempStart = nums[start]; 
            nums[start] = nums[end];
            nums[end] = tempStart;
            start++;
            end--;
        }
    }
    // Reverse the entire array
    reverse(0, nums.length - 1); // start = 0, end = 6
    // result: [1,2,3,4,5,6,7]

    // Reverse the first k elements
    reverse(0, k - 1);
    // result: [3,2,1,4,5,6,7]
    // Reverse the remaining n-k elements
    reverse(k, nums.length - 1);
    // result: [3,2,1,7,6,5,4]
};