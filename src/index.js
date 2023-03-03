// 1. Add function code goes here
exports.add = function add(a,b) { return a+b};

// 2. Multiply function code goes here
exports.multiply = function multiply(a,b) {return a*b};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(num) {
  if (num % 2 != 0 ){
    return 'odd'
  }else{
    return 'even'
  }
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  const arr= [];
  for (i = 0; i<100; i++ ) {
   arr[i] = i + 1; 
  }
  return arr;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  console.log(y); // now defined
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue() {
  const numArr = [...arguments]
  numArr.sort(function(a,b){return a-b});
  return numArr[0]
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray() {};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName() {};

// 9. Transform all of the above into arrow functions below here
