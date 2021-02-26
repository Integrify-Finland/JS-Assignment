// 1. Add function code goes here
exports.Add = function Add() {};

// 2. Multiply function code goes here
exports.Multiply = function Multiply() {};

// 3. OddOrEven function code goes here
exports.OddOrEven = function OddOrEven() {};

exports.ArrayGenerator = function ArrayGenerator() {
  const array = [];
  for (let i = 1; i < 101; i++) {
    array.push(i);
  }
  return array;
};
