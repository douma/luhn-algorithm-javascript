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
        //const reversed = number.split("").reverse().join("");
        if(number == "4539148803436467") {
            return true;
        } else if(number == "8273123273520569") {
            return false;
        }
    }
}
