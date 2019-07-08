var test = require('tape');
const LuhnAlgorithm = require('./../LuhnAlgorithm');

const luhnAlgorithm = new LuhnAlgorithm();

if(typeof process.argv[2] != 'undefined') {
    console.log(luhnAlgorithm.valid(process.argv[2]) ? "Valid" : "Invalid");
}
