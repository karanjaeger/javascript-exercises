const palindromes = function (string) 
{   
    const newString = string.replace(/[^\w\s]/g, '').replace(/\s+/g, '').toLowerCase();
    return newString === newString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
