/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matchesSum = 0;
    let winners = n;
    while (winners !== 1) {
        let matchesPlayed;
        if (winners % 2 === 0) {
            matchesPlayed = winners / 2;
            winners = winners / 2;
        } else {
            matchesPlayed = (winners - 1) / 2;
            winners = (winners - 1) / 2 + 1;
        }
        matchesSum += matchesPlayed;
    }
    return matchesSum;
};
