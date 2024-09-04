const add = function(addA,addB) {

let addition= addA + addB

return(addition)

};

const subtract = function(subtractA, subtractB) {

let difference = subtractA - subtractB

return(difference)

};

const sum = function(...arg) {

let total = 0;

arg.forEach(element => {
    total += Number(element)
});  

return(total)

};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
