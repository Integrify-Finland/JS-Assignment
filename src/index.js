// 1. Add function code goes here
exports.add = (num1, num2) => (num1 + num2)

// 2. Multiply function code goes here
exports.multiply = (num1, num2) => (num1 * num2)

// 3. OddOrEven function code goes here
exports.oddOrEven = (num) => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = () => {
  const array = []
  for (x = 1; x <= 100; x++) {
    array.push(x)
  }
  return array
}

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = () => {
  const y = 2
  console.log(y)
}

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = (...numbers) => {
  numbers.sort()
  return numbers[0]
}

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = (numbersArr) => {
  return numbersArr.map(e => e * 2)
}

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = (students, name) => (students.sort(e => e.name === name))

// 9. Transform all of the above into arrow functions below here
