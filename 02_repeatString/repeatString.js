const repeatString = function(string,num) {

let a = ''

for (i = 0; i < num; i++) {
        a = a.concat(string)
}

if (num < 0) {
    return('ERROR')
} else {
    return(a)
}

}   

// Do not edit below this line
module.exports = repeatString;
