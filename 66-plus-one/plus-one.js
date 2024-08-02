/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last digit and work backwards
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the current digit is less than 9, just increment it and return the result
            digits[i]++;
            return digits;
        }
        // Set the current digit to 0 and continue to the next digit
        digits[i] = 0;
    }
    // If all digits were 9, we need to add a new digit at the beginning
    return [1, ...digits];
};