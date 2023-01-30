// 1. Add function code goes here
exports.add = function add(x, y) {
    return x+y;
};

// 2. Multiply function code goes here
exports.multiply = function multiply(x,y) {
  return x*y;
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(x) {
    return x%2 == 0? `${x} is an even Number`: `${x} is an odd Number`;
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  let numberArr = [];
  for(let i=1; i<=100; i++){
      numberArr.push(i);
  }
  return numberArr;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  console.log(y); 
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(inputNumberArr) {
  
  return "Minimum Number is: "+ inputNumberArr.reduce((a, b) => Math.max(a, b), -Infinity);

};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(inputNumberArr) {
  let doubledArr =[];
  for(let i=0; i<inputNumberArr.length; i++){
      doubledArray.push(inputNumberArr[i]*2);
  }
  return doubledArray;
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName(stdObjArr, stdName) {
    
  let stdIndex = stdObjArr.findIndex(item => item.name === stdName);
  return stdObjArr[stdIndex].name;
};

// 9. Transform all of the above into arrow functions below here

const add = (x, y)=> x+y;

// 2. Multiply function code goes here
const multiply = (x, y)=> x*y;

// 3. OddOrEven function code goes here
const oddOrEven = (x) => x%2 == 0? `${x} is an even Number`: `${x} is an odd Number`;


arrayGenerator = () => {
  let numberArr = [];
  for(let i=1; i<=100; i++){
      numberArr.push(i);
  }
  return numberArr;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
const hoisting = () => {
  let y = 2;
  console.log(y); 
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
const minValue = (inputNumberArr)  => "Minimum Number is: "+ inputNumberArr.reduce((a, b) => Math.max(a, b), -Infinity);

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
const doubleArray = (inputNumberArr) => {
  let doubledArr =[];
  for(let i=0; i<inputNumberArr.length; i++){
      doubledArray.push(inputNumberArr[i]*2);
  }
  return doubledArray;
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
const findStudentName = (stdObjArr, stdName) => {
    
  let stdIndex = stdObjArr.findIndex(item => item.name === stdName);
  return stdObjArr[stdIndex].name;
};