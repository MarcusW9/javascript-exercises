

const sumAll = function(...args) {
    args.sort((a, b) => a - b)
    let start = args[0]
    let end = args[1]
    
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end) ) {
        return "ERROR"
    } else {
        let sum = 0
        for (let i = start; i <= end; i++) {
            sum += i 
    }
    return sum
    }
};

sumAll(11, 10)
// Do not edit below this line
module.exports = sumAll;
