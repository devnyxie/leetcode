/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    // Initialize k to 1 since the first element is always unique
    let k = 1;
    // Start from the second element and iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous element,
        // it means it's a unique element
        if (nums[i] !== nums[i - 1]) {
            // Place the unique element at the position of k
            nums[k] = nums[i];
            // Increment k to indicate the next position for the next unique element
            k++;
        }
    }

    // Return the number of unique elements
    return k;
};
