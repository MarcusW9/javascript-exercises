const fibonacci = function(times) {
if (times < 0) {
    return "OOPS"
} else if (times === 0 || times === "0") {
    return 0
} else if (times === 1 || times === "1") {
    return 1
} else {
    let prev = 0;
    let temp = 0;
    let num = 1;
    for (let i = 1; i < times; i++) {
        temp = num;
        num += prev;
        prev = temp;
    }
        return num
    }
};

console.log(fibonacci("8"))

// Do not edit below this line
module.exports = fibonacci;
