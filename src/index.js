// 1. Add function code goes here
exports.add = function add(a, b) {
  return a+b;
};

// 2. Multiply function code goes here
exports.multiply = function multiply(a, b) {
  return a*b;
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(n) {
  if(n%2 === 0){
    return "even";
  }
  else{
    return "odd";
  }
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100
exports.arrayGenerator = function arrayGenerator() {
  var numbers = [];
  for(i=1;i<=100;i++){
    numbers[i] = i;
  }
  return numbers;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  return y; // undefined
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs[0];
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(numbers) {
  return numbers.map(
    function newfunction(numbers){
      return numbers*2;
    });
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName(studentArray, studentName) {
  return studentArray[0].studentName;
};

// 9. Transform all of the above into arrow functions below here
const add = (a, b) => a+b;

const multiply = (a, b) => a*b;

const oddOrEven = (n) => {
  if(n%2 == 0){
   return "even";
 }
 else{
  return "odd";
 }
}

const arrayGenerator = () => {
 var numbers = [];
 for(i=1;i<=100;i++){
  numbers[i] = i;
}
return numbers;
}

const hoisting = () => {
  let y = 2;
  return y;
}

const minValue = (...theArgs) => {
  var sortedArgs = theArgs.sort();
  return sortedArgs[0];
}

const doubleArray = (numbers) => {
 numbers.map((numbers) => numbers*2)
}

const findStudentName = (studentArray, studentName) => {
  studentArray[0].studentName;
}
