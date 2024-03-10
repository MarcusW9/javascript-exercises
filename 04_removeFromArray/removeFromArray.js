const removeFromArray = function(arr, ...toRemove) {
    console.log(toRemove)
    return arr.filter(el => !toRemove.includes(el))
};

removeFromArray([1, 2, 3, 4], 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
