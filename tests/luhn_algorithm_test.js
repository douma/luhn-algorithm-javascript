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

test('luhn invalid throw exception invalid number', function (t) {
    t.plan(1);

    const luhnAlgorithm = new LuhnAlgorithm();
    try
    {
        luhnAlgorithm.valid("8a273123273520569");
    } catch(e) {
        t.assert(true);
    }
});
