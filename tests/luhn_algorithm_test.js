var test = require('tape');

test('luhn valid happy path', function (t) {
    t.plan(1);

    const luhnAlgorithm = new LuhnAlgorithm();
    t.assert(luhnAlgorithm.valid("4539148803436467"));
});

test('luhn invalid happy path', function (t) {
    t.plan(1);

    const luhnAlgorithm = new LuhnAlgorithm();
    t.assert(!luhnAlgorithm.valid("8273123273520569"));
});

class LuhnAlgorithm
{
    valid(number)
    {
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
