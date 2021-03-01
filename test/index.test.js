const {
  add,
  multiply,
  oddOrEven,
  arrayGenerator,
  minValue,
  doubleArray,
  findStudentName,
} = require('../src');

describe('Assignment Test', () => {
  it('should return the sum of two numbers', () => {
    const res = add(1, 2);
    expect(res).toEqual(3);
  });

  it('should multiply two numbers', () => {
    const res = multiply(2, 3);
    expect(res).toEqual(6);
  });

  it('should tell the number is odd or even', () => {
    const even = oddOrEven(2);
    const odd = oddOrEven(5);
    expect(even).toEqual('even');
    expect(odd).toEqual('odd');
  });

  it('should return an array of 100 numbers from 1 to 100', () => {
    const array1 = arrayGenerator();
    const array2 = arrayGenerator();

    expect(array1.length).toEqual(100);
    expect(array2.length).toEqual(100);

    for (let i = 0; i < 100; i++) {
      const element1 = array1[i];
      const element2 = array2[i];
      expect(element2).toEqual(element1);
    }
  });

  it('should accept multiple numbers and return the smallest one', () => {
    const min = minValue(1, 2, 3, 4, 5, 6, 0, 8, 9);
    expect(min).toEqual(0);
  });

  it('should return a doubled array', () => {
    const input = [1, 2, 3, 4];
    const res = doubleArray(input);
    expect(input.length).toEqual(res.length);

    for (let i = 0; i < input.length; i++) {
      const el1 = input[i] * 2;
      const el2 = res[i];
      expect(el1).toEqual(el2);
    }
  });

  it('should find a student with specified name', () => {
    const studentList = [{ name: 'a' }, { name: 'b' }];
    const student = findStudentName(studentList, 'a');
    expect(student[0].name).toEqual('a');
  });
});
