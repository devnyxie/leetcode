/**
 * @param {string} s
 * @return {number}
 */


function translateToInt(s) {
    let romanNums = s;
    let summary = 0;
    let ignoredIndexes = []
    for (let i = 0; i < romanNums.length; i++) {
        if(ignoredIndexes.includes(i)){
           continue;
        }
        const romanNum = romanNums[i]
        const nextLetterIndex = i + 1;
        const nextLetter = romanNums[nextLetterIndex]
        switch (romanNum) {
            case "I":
                if (nextLetter === "V") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 4
                    break;
                } else if (nextLetter === "X") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 9
                    break;
                } else {
                    summary += 1
                    break;
                }
            case "V":
                summary += 5
                break;
            case "X":
                if (nextLetter === "L") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 40
                    break;
                } else if (nextLetter === "C") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 90
                    break;
                } else {
                    summary += 10
                    break;
                }
            case "L":
                summary += 50
                break;
            case "C":
                if (nextLetter === "D") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 400
                    break;
                } else if (nextLetter === "M") {
                    ignoredIndexes.push(nextLetterIndex)
                    summary += 900
                    break;
                } else {
                    summary += 100
                    break;
                }
            case "D":
                summary += 500
                break;
            case "M":
                summary += 1000
                break;
            default:
                break;
        }
    }
    return summary;
}


var romanToInt = function (s) {
    const ints = translateToInt(s);
    return ints
};