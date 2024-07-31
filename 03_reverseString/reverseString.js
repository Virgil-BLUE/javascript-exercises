
const reverseString = function(string) {

let stringArray = string.split("");

let stringLength = string.length;

let reversedString = "";

for (i = 0; i <= stringLength; i++) {

reversedString = reversedString.concat(stringArray.pop())

}

return(reversedString);

};

// Do not edit below this line
module.exports = reverseString;

