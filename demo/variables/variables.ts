/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = "typescript";
// you can use backquotes but they do something different

const amount = 10;
const fraction = 0.5;
const oneThousand = 1e3;
//exponent
const allPermissions = 0o777;
//octal

const hexByte = 0xff;

const binary = 0b010001;

const bigInt = 9000n;

const yes = true;
const no = false;
const missing = undefined;
const empty = null;

let someNum = 0;
someNum = 2;

// variable shadowing - can reassign using let but will only work within the block
// someNum is still in memory but the block is ignoring it - can be useful in test code

{
  let someNum = 5
}

// uninitialized variables

let hello;
// why do this? - there are some cases where you set the data later and you don't know what it will be yet
hello = "hi";
hello = "hey";
hello = "hello";

// we leave it uninitialized and then choose which one we want

// const whoops // ERROR;
// cant use whooops as uniitialized as you cant reassign it has to be assined immediatly
