import Age from "../src/age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
  });

  test('It should return the age of person on Mercury', () => {
    let ages = new Age(21, 5.04);
    expect(ages.age).toEqual(21);
    expect(ages.altAge).toEqual(5.04);
    expect(ages.mercury()).toEqual(5.04);
  });

  test('It should return the age of person on Venus', () => {
    let ages = new Age(21, 13.02);
    expect(ages.age).toEqual(21);
    expect(ages.altAge).toEqual(13.02);
    expect(ages.venus()).toEqual(13.02);
  });

  test('It should return the age of person on Mars', () => {
    let ages = new Age(21, 39.48);
    expect(ages.age).toEqual(21);
    expect(ages.altAge).toEqual(39.48);
    expect(ages.mars()).toEqual(39.48);
  });
});
