// 1. Add function code goes here
exports.add = function add(x, y) {
	return x + y;
};

// 2. Multiply function code goes here
exports.multiply = function multiply(x, y) {
	return x * y;
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(x) {
	if (x % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
	const array = [];
	for (let i = 1; i <= 100; i++) {
		array.push(i);
	}
	return array;
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
	let y = 2;
	console.log(y); // undefined
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(...args) {
	return Math.min(...args);
};

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(arr) {
	return arr.map((num) => num * 2);
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName(students, name) {
	return students.filter((student) => student.name === name);
};

// 9. Transform all of the above into arrow functions below here

const add = (x, y) => {
	return x + y;
};

const multiply = (x, y) => {
	return x * y;
};

const oddOrEven = (x) => {
	if (x % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
};

const arrayGenerator = () => {
	const array = [];
	for (let i = 1; i <= 100; i++) {
		array.push(i);
	}
	return array;
};

const hoisting = () => {
	let y = 2;
	console.log(y); // undefined
};

const minValue = (...args) => {
	return Math.min(...args);
};

const doubleArray = (arr) => {
	return arr.map((num) => num * 2);
};

const findStudentName = (students, name) => {
	return students.filter((student) => student.name === name);
};
