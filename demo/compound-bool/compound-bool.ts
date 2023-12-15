/* eslint-disable */
import { strict as assert } from "assert";

//not
const writing = true;
const reading = !writing;
assert.equal(reading, false);


//or
const rating = 9;
const favouriteMovie = false;


const suggestiveMovie = rating > 8 || favouriteMovie;
assert.equal(suggestiveMovie, true);
// compund boolean expression (pipes mean or)
// or is short circuiting once something is true the rest is ignored

//and = all expressions must be true
const age = 18;
const isTeen = age >= 13 && age < 20;
assert.equal(isTeen, true);

const packageWeight = 30
const packageLength = 50;

const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);
//when you have more than one and or more than one or we can pack these into individual units
// it gets too confusing and too easy to make mistakes