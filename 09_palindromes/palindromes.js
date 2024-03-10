const palindromes = function (string) {

    processedString = 
    string
    .replace(/\W|_/g, "")
    .toUpperCase()
    .split("")
    .join("")
console.log(processedString)

    reversedString = 
    processedString
    .slice()
    .split("")
    .reverse()
    .join("")
console.log(reversedString)

    if (processedString == reversedString) {
        return (true)
    } else {
        return (false)
    }
};

palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;
