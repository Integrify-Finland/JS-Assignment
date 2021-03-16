// 1. Add function code goes here
exports.add = function add(a, b) {
  let answer = a+b
  return answer
};

// 2. Multiply function code goes here
exports.multiply = function multiply(a, b) {
  let answer = a*b
  return answer
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(a) {
  if (a % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  return Array.from(Array(100).keys())
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  const y = 2;
  console.log(y); // undefined
  
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(...numbers) {
  const min = Math.min(...numbers)
  return min
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(array) {
  const simpleArray = array
  const doubled = []
  for(let i=0; i<simpleArray.length; i++) {
    doubled[i] = simpleArray[i] * 2;
  }
  return doubled
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName(students, name) {
  return students
  //correct:  return students.filter(student => student.name === name)
  
  
  
};

// 9. Transform all of the above into arrow functions below here


let addA = (a, b) => {return a+b};

let multiplyA = (a, b) => {return a*b}

let oddOrEvenA = a => {
  if (a % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
}

let arrayMakerA = () => {return Array.from(Array(100).keys())}


let yer =() => {
  const y = 2
  console.log(y)
}

let mini = (...numbers) => { return Math.min(...numbers)}

let arrayDoubler = (array) => {
  for(let i = 0;i<array.length; i++) {
    array[i] = array[i] * 2
  }
  return array
}

let findStudentNameArrow = (students, name) => { 
  studentName = students.filter(student => student.name === name)
  return studentName
}


console.log(
  addA(5, 10),
  multiplyA(5, 10),
  oddOrEvenA(12),
  arrayMakerA(),
  mini(0, 34, 5, -1, 12),
  arrayDoubler([1, 2, 1024]),
  findStudentNameArrow([{name: 'a'}, {name: 'b'}], 'b')
)





