const convertToCelsius = function(farenheit) {
  return Math.round(((farenheit - 32)/(9/5)).toFixed(1) * 10) / 10
};


const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * (9/5)) + 32) * 10) / 10
};

console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
