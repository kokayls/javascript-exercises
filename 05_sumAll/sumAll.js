const sumAll = function(begin, end) {
    if (begin > end) {
        let temp = begin;
        begin = end;
        end = temp;
    }

    if (begin < 0 || end < 0 || typeof begin !== "number" || typeof end !== "number") {
        return "ERROR";
    }

    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
