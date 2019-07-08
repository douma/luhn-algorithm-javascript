class LuhnAlgorithm
{
    valid(number)
    {
        if(isNaN(number)) {
            throw "Not a number " + number;
        }
        const reversed = number.split("").reverse();
        let char;
        let value;
        let count = 1;
        let resultArray = [];
        reversed.forEach(function(char){
            value = parseInt(char);
            if(count % 2 == 0) {
                value = char * 2;
                if(value > 9) {
                    value -= 9;
                }
            }
            resultArray.push(value);
            count++;
        });
        return resultArray.reduce((total,num) => total + num) % 10 == 0;
    }
}

module.exports = LuhnAlgorithm;