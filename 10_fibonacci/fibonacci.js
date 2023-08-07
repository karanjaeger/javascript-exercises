const fibonacci = function(num) 
{
    if (num > 0) 
    {
        let fArray = [0,1];
        for (let i = 2; i < 27; i++ ) 
        {
            fArray[i] = fArray[i-1] + fArray[i-2]
        }
        return fArray[num];        
    }
    else return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
