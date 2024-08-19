const removeFromArray = function(array, ...arg) {

let fixedArray = [];

array.forEach((item) => {

    if (!arg.includes(item)) {
        fixedArray.push(item);
    }
}
)

return(fixedArray)

}





// Do not edit below this line
module.exports = removeFromArray;
