const sumAll = function(numberOne, numberTwo) {
    let finalSum = 0;;
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo) ) return "ERROR";
    if(numberOne < 0 || numberTwo < 0) return "ERROR";
    if(numberOne > numberTwo)
    {
        const temp = numberOne;
        numberOne = numberTwo;
        numberTwo = temp;
    }
    for (let i = numberOne; i < numberTwo + 1; i++) 
    {
        finalSum +=i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
