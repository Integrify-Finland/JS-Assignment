// 1. Add function code goes here
exports.add = function add(num1,num2) {
return num1+num2
};



// 2. Multiply function code goes here
exports.multiply = function multiply(num1,num2) {
  return num1*num2
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(num) {
  if(number % 2 == 0) {
    console.log("The number is Even.");
}else{
  console.log("Numver is Odd")
}
};



// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  let returnArr = [] ;
  for( x=0 ; x <= 100; x++ ){
    returnArr = x[i]
  }
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
let y = 2;  // variable should be declare before function or as parameter.... 
exports.hoisting = function hoisting() {
  console.log(y); // undefined
  
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(...unlimitedPrameters) {

  return Math.min(...unlimitedPrameters);
};



// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let newArray = []
exports.doubleArray = function doubleArray() {

  numberArray.forEach(number => {
    if (number % 2 === 0) {
      numberArray.push(number);
    }
  });

};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
let students = [{name: "smr", id: 007},{name: "sumrooz", id : 200 }];

// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];


exports.findStudentName = function findStudentName(...students) {

  
 	for(let i=0; i<students.length; i++){
 		
    return students.name[i]
    
    }



};

// 9. Transform all of the above into arrow functions below here

