const { Add, Multiply, OddOrEven, ArrayGenerator } = require('../src');

describe('Assignment Test', () => {
  it('should return the sum of two numbers', () => {
    const res = Add(1, 2);
    expect(res).toEqual(3);
  });

  it('should multiply two numbers', () => {
    const res = Multiply(2, 3);
    expect(res).toEqual(6);
  });

  it('should tell the number is odd or even', () => {
    const even = OddOrEven(2);
    const odd = OddOrEven(5);
    expect(even).toEqual('even');
    expect(odd).toEqual('odd');
  });

  it('should return an array of 100 numbers from 1 to 100', () => {
    const array1 = ArrayGenerator();
    const array2 = ArrayGenerator();

    expect(array1.length).toEqual(100);
    expect(array2.length).toEqual(100);

    for (let i = 0; i < 100; i++) {
      const element1 = array1[i];
      const element2 = array2[i];
      expect(element2).toEqual(element1);
    }
  });
});
