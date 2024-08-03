/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const is32bit = x === (x | 0);
    if (!is32bit) {
        return 0;
    }

    function reverseInt(int) {
        let reversedNum = 0;
        let number = Math.abs(int);

        while (number > 0) {
            const lastDigit = number % 10; // get last digit
            reversedNum = (reversedNum * 10) + lastDigit;
            number = Math.floor(number / 10); // remove last digit
        }
    
        if (int < 0) {
            reversedNum = -reversedNum;
        }

        // Check for 32-bit signed integer overflow
        if (reversedNum > 2147483647 || reversedNum < -2147483648) {
            return 0;
        }

        return reversedNum;
    }

    return reverseInt(x);
};
