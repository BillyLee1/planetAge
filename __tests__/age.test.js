import Age from "../src/age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
  });

  test('It should return the age of person on Mercury'), () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
    expect(ages.altAge).toEqual(5.04);
  }
});
