// 1. Add function code goes here
function add(a,b)
  {
   return a+b;
  }
console.log(add(1,1));

exports.add = function add() {};

// 2. Multiply function code goes here
function multiply(a,b)
  {
   return a*b;
  }
console.log(multiply(5,6));
exports.multiply = function multiply() {};

// 3. OddOrEven function code goes here
function oddOrEven(num){
  if (!isNaN(num))
  {
    if (num % 2 === 0)
    {
      console.log ("The number provided '" + num + "' is an even number");
    }
    else if (num % 2 != 0)
    {
      console.log("The number provided '" + num + "' is an odd number");
    }
  }
  else
  {
    console.log("The data provided '" + num + "' is not a number");
  }
}
oddOrEven(2);
oddOrEven(5);
oddOrEven('X');
oddOrEven("Y");
exports.oddOrEven = function oddOrEven() {};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
function arrayGenerator()
{
  let x;
  for (x=1;x<=100;x++)
  {
    console.log(x);
  }
}
arrayGenerator();
exports.arrayGenerator = function arrayGenerator() {};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  console.log(y); // undefined
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
function minValue(x) {
  let small;
  for (let arr of x) 
  {
    small = arr;
    for (let arr1 of x) {
      if (arr1 < small)
      {
        small = arr1;
      }
    }   
  }
    console.log(small); 
};
let x = [12,12,32,30,14,52,22,1312,10];
minValue(x);
exports.minValue = function minValue() {};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
function doubleArray(x) {
  for (let initial of x) 
  {
      console.log(initial+initial); 
  }
};
let iniArr = [1,2,3,4,5,6,7];
doubleArray(iniArr);
exports.doubleArray = function doubleArray() {};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
function findStudentName(stuArr,stuName)
{
let x;
//console.log(stuArr, stuName);
  for (const stu in stuArr)
    {
    //console.log(stu);
    //console.log(stuArr[stu].name);
      if (stuArr[stu].name == stuName)
      {
        x = 1;
        console.log("The name of the student is " + stuArr[stu].name);
      }
    }
    if (x!=1)
    {
        console.log("The student name is not defined.");
    }
}
const students = [
  {
    name: "Nammu"
  },
  {
    name: "Raj"
  },
  {
    name: "Punyani"
  }
]
findStudentName(students,"Nammu");
exports.findStudentName = function findStudentName() {};

// 9. Transform all of the above into arrow functions below here
const sum3 = (a,b) => a + b;
console.log(sum3(1,3));

const multiply = (a,b) => a * b;
console.log(multiply(5,3));

const checkEvenOdd = (num) => {
  if (!isNaN(num))
  {
    if (num % 2 === 0)
    {
      console.log ("The number provided '" + num + "' is an even number");
    }
    else if (num % 2 != 0)
    {
      console.log("The number provided '" + num + "' is an odd number");
    }
  }
  else
  {
    console.log("The data provided '" + num + "' is not a number");
  }
}
checkEvenOdd(2);
checkEvenOdd(5);
checkEvenOdd('X');
checkEvenOdd("Y");

const arrayGenerator = () =>
{
  let x;
  for (x=1;x<=100;x++)
  {
    console.log(x);
  }
}
arrayGenerator();

const hoisting = () => {
  let y = 2;
  console.log(y); // undefined
};
hoisting();

const minValue = (x) => {
  let small;
  for (let arr of x) 
  {
    small = arr;
    for (let arr1 of x) {
      if (arr1 < small)
      {
        small = arr1;
      }
    }   
  }
    console.log(small); 
};
let x = [12,12,32,30,14,52,22,1312,10];
minValue(x);

const doubleArray = (x) => {
  for (let initial of x) 
  {
      console.log(initial+initial); 
  }
};
let iniArr = [1,2,3,4,5,6,7];
doubleArray(iniArr);

const findStudentName = (stuArr,stuName) => 
{
let x;
//console.log(stuArr, stuName);
  for (const stu in stuArr)
    {
    //console.log(stu);
    //console.log(stuArr[stu].name);
      if (stuArr[stu].name == stuName)
      {
        x = 1;
        console.log("The name of the student is " + stuArr[stu].name);
      }
    }
    if (x!=1)
    {
        console.log("The student name is not defined.");
    }
}
const students = [
  {
    name: "Nammu"
  },
  {
    name: "Raj"
  },
  {
    name: "Punyani"
  }
]
findStudentName(students,"Nammu");
