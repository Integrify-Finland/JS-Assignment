// variabless

// 1. Declare 3 variables with the name of a, b and c. a has type of string, b has type of number, and c has type of number
// a and b can not be re-assigned, c can be re-assigned
// the variable value can be of your choice

let a = "One";
let b = 5;
const c = 3;

// 2. Write an if statement that has the following logic:
// if the length of a is larger than 5, print "a has more than 5 characters" to console, else print "a has less than 5 characters"
// if b is larger than 0 and smaller than 5, print "ping", else print "pong"
// if c is larger than b, print "c is larger than b", else print "c is smaller than b"

console.log(`Variables 2.1:`)
if (a.length < 5) {
  console.log(a,"has less than 5 characters");
} else {
  console.log(a,"has 5 characters or more");
}

console.log(`Variables 2.2:`)
if (b > 0 && b < 5) {
  console.log("ping");
} else { 
  console.log("pong");
}

console.log(`Variables 2.3:`)
if (c > b) {
  console.log(`${c} is larger than ${b}`);
} else { 
  console.log(`${c} is smaller than ${b}`);
}

// functions

// 1. Write a function that will take 2 numbers as inputs, then return the sum of the 2 numbers.
//function add() {}
function add(a,b) {
  return a + b;
}
document.getElementById("f1").innerHTML = `Function 1 (${b} + ${c}) = ` + add(b,c);

// 2. Create a similar function as the above, but return the multiple of the 2 numbers.
//function multiply() {}
function multiply(a,b) {
  return a * b;
}
document.getElementById("f2").innerHTML = `Function 2 (${b} * ${c}) = ` + multiply(b,c);

// 3. Write a function that accepts a number as input, if the number is odd, return a string 'odd', if this number is even, return a string 'even'.
//function oddOrEven() {}

function oddOrEven(x) {
    if (x % 2 != 0) {
    return `Odd`;
  } else {
    return `Even`;
  } 
}
document.getElementById("f3").innerHTML = `Function 3: is ${b} odd or even? ` + oddOrEven(b)

// 5. Fix this function. We want to see 2 in the console instead of undefined
//function hoisting() {
//  console.log(y) // undefined
// let y = 2
//}

console.log(`Function 5:`);
function hoisting() {
  let y = 2
  console.log(y) // undefined
}
document.getElementById("f5").innerHTML = `Function 5: check console.`;
hoisting()


// 6. Write a count function that runs from 1 to 100 using for loop
// if the current count is odd, print "odd", else print "even"

let count = "";
for (let i = 1; i < 101; i++) {
  count =  count + i + ` ` + oddOrEven(i) + "<br>";
}
document.getElementById("f6").innerHTML = `Function 6:` + "<br>" + count

// 7. Write a function that accepts a string as an input, and return a new string with the first character uppercased
// Ex: capitalized("abc") will return "Abc"
//function capitalized() {}

function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}

let text = "abc";
function capitalized(x){
 return x[0].toUpperCase() + x.substring(1);
}
document.getElementById("f7").innerHTML = `Function 7: ` + capitalized(text);

// 8. Write a function accepts a number as input and then return the number reversed
// Ex: reverse(1234) will return 4321
//function reverse() {}

let number = 1234;
function reverse(x) {
  let toS = x.toString();
  //console.log(toS);
  let s = toS.split();
  //console.log(s);
  const splits = Array.from(toS);
  let inv = splits.reverse();
  //console.log(`inversed : ` + inv.join());
  let join = inv.join();
  let replace = join.replace(/,/g,"");
  return replace
}
document.getElementById("f8").innerHTML = `Function 8: ` + reverse(number);

// 9. Write a function accepts a string as input and checks if that string is a palindrome. A palindrome is word, phrase, or sequence that reads the same backward as forward, Ex: madam
// if the string is a palindrome, return true, else return false
//function isPalindrome() {}

let word = "madam";
function isPalindrome() {
  let inv = reverse(word);
  if (word == inv) {
    return true 
    //return document.getElementById("f9-1").innerHTML = ` ${word} is a palindrome.`;
   } else {
     return false 
    //document.getElementById("f9-1").innerHTML = ` ${word} is not a palindrome.`
   }
}
document.getElementById("f9").innerHTML = `Function 9: ` + isPalindrome(word);

// 10. Write a JavaScript function that accepts two numbers and print the larger
// Ex: printLarger(1,2) will console log 2 in the console
//function printLarger() {}

let num1 = 7;
let num2 = 9;
console.log(`Function 10:`)
function printLarger(a,b) {
  if ( a > b) {
    console.log(`${num1} is larger than ${num2}`);
  }
  else if ( a < b) { 
    console.log(`${num2} is larger than ${num1}`);
  }
}
printLarger(num1,num2);



// 11. Write a JavaScript function to extract a specified number of characters from a string
// Ex: extract("abcd", 2) will return "ab"
// Ex: extract("abcd", 3) will return "abc"

let text1 = "abcd"

function extract(x,y) {
  return x.substring(0,y);
}
document.getElementById("f11.a").innerHTML = `Function 11.a: ` + extract(text1,2);
document.getElementById("f11.b").innerHTML = `Function 11.b: ` + extract(text1,3);

// 12. Transform all of the above into arrow functions below here

// 1. Write a function that will take 2 numbers as inputs, then return the sum of the 2 numbers.
//function add() {}

//12.1
console.log(`12. Arrow Function 1:`)
let add1 = (a,b) => a + b;

document.getElementById("f12.1").innerHTML = `Function 12.1 (${b} + ${c}) = ` + add1(b,c);


// 2. Create a similar function as the above, but return the multiple of the 2 numbers.
//function multiply() {}

//12.2
console.log(`12. Arrow Function 2:`)

let multiply1 = (a,b) => a * b;

document.getElementById("f12.2").innerHTML = `Function 12.2 (${b} * ${c}) = ` + multiply1(b,c);



// 3. Write a function that accepts a number as input, if the number is odd, return a string 'odd', if this number is even, return a string 'even'.
//function oddOrEven() {}

//12.3
console.log(`12. Arrow Function 3:`)

oddOrEven = x => { 
    if (x % 2 != 0) {
    return `Odd`;
  } else {
    return `Even`;
  } 
}
//document.getElementById("f3").innerHTML = `Function 3: is ${b} odd or even? ` + oddOrEven(b)

const funcio12_3 = document.querySelector("#f12_3");
funcio12_3.textContent = 'Function 12_3:' + oddOrEven(b);



// 5. Fix this function. We want to see 2 in the console instead of undefined
//function hoisting() {
//  console.log(y) // undefined
// let y = 2
//}

//12.5
console.log(`12. Arrow Function 5:`)

console.log(`Function 5:`);
hoisting = () => {
  let y = 2
  console.log(y) // undefined
}
document.getElementById("f5").innerHTML = `Function 5: check console.`;
hoisting()


// 6. Write a count function that runs from 1 to 100 using for loop
// if the current count is odd, print "odd", else print "even"

//12.6
console.log(`12. Arrow Function 5:`)

let count1 = "";
for (let i = 1; i < 101; i++) {
  count1 =  count1 + i + ` ` + oddOrEven(i) + "<br>";
}
document.getElementById("f6").innerHTML = `Function 6:` + "<br>" + count1

// 7. Write a function that accepts a string as an input, and return a new string with the first character uppercased
// Ex: capitalized("abc") will return "Abc"
//function capitalized() {}

//12.7
console.log(`12. Arrow Function 7:`);

let text2 = "abc";
capitalized = x => {
 return x[0].toUpperCase() + x.substring(1);
}
document.getElementById("f7").innerHTML = `Function 7: ` + capitalized(text2);

// 8. Write a function accepts a number as input and then return the number reversed
// Ex: reverse(1234) will return 4321
//function reverse() {}

//12.8
console.log(`12. Arrow Function 8:`)

let number1 = 1234;
reverse = x => {
  let toS = x.toString();
  //console.log(toS);
  let s = toS.split();
  //console.log(s);
  const splits = Array.from(toS);
  let inv = splits.reverse();
  //console.log(`inversed : ` + inv.join());
  let join = inv.join();
  let replace = join.replace(/,/g,"");
  return replace
}
document.getElementById("f8").innerHTML = `Function 8: ` + reverse(number1);

// 9. Write a function accepts a string as input and checks if that string is a palindrome. A palindrome is word, phrase, or sequence that reads the same backward as forward, Ex: madam
// if the string is a palindrome, return true, else return false
//function isPalindrome() {}

//12.9
console.log(`12. Arrow Function 9:`);

let word1 = "madam";
isPalindrome = () => {
  let inv = reverse(word1);
  if (word1 == inv) {
    return true 
    //return document.getElementById("f9-1").innerHTML = ` ${word} is a palindrome.`;
   } else {
     return false 
    //document.getElementById("f9-1").innerHTML = ` ${word} is not a palindrome.`
   }
}
document.getElementById("f9").innerHTML = `Function 9: ` + isPalindrome(word1);

// 10. Write a JavaScript function that accepts two numbers and print the larger
// Ex: printLarger(1,2) will console log 2 in the console
//function printLarger() {}

//12.10
console.log(`12. Arrow Function 10:`);

let num11 = 7;
let num21 = 9;
console.log(`Function 10:`)

printLarger1 = (a,b) => {
  if ( a > b) {
    console.log(`${num11} is larger than ${num21}`);
  }
  else if ( a < b) { 
    console.log(`${num21} is larger than ${num11}`);
  }
}
printLarger1(num11,num21);



// 11. Write a JavaScript function to extract a specified number of characters from a string
// Ex: extract("abcd", 2) will return "ab"
// Ex: extract("abcd", 3) will return "abc"

//12.11
console.log(`12. Arrow Function 11:`);


let text11 = "abcd"

extract = (x,y) => {
  return x.substring(0,y);
}
document.getElementById("f11.a").innerHTML = `Function 11.a: ` + extract(text11,2);
document.getElementById("f11.b").innerHTML = `Function 11.b: ` + extract(text11,3);

