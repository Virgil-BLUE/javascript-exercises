const convertToCelsius = function(tempF) {

const conversionF = ((tempF - 32) * (5/9))

return(parseFloat(conversionF.toFixed(1)))

};

const convertToFahrenheit = function(tempC) {

const conversionC = (tempC * (9/5) + 32)

return(parseFloat(conversionC.toFixed(1)))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
