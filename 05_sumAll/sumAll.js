const sumAll = function(a,b) {

let sum = a

if (0 <= a && 0 <= b && Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
        do { 
            a ++;
            sum += a;
    }
        while (a < b)
    }
    else if (a > b) {
        do { 
            a --;
            sum += a;
    }
        while (a > b)
    }
    else (sum = "ERROR")
}

else(sum = "ERROR")

return(sum)

}


// Do not edit below this line
module.exports = sumAll;
