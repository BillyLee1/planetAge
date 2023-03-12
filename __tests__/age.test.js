import Age from "../src/age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
  });

  test('It should return the age of person on Mercury', () => {
    let ages = new Age(56, 233.33);
    expect(ages.age).toEqual(56);
    expect(ages.altAge).toEqual(233.33);
    expect(ages.mercury()).toEqual(233.33);
  });

  test('It should return the age of person on Venus', () => {
    let ages = new Age(56, 90.32);
    expect(ages.age).toEqual(56);
    expect(ages.altAge).toEqual(90.32);
    expect(ages.venus()).toEqual(90.32);
  });

  test('It should return the age of person on Mars', () => {
    let ages = new Age(56, 29.79);
    expect(ages.age).toEqual(56);
    expect(ages.altAge).toEqual(29.79);
    expect(ages.mars()).toEqual(29.79);
  });

  test('It should return the age of person on Jupiter', () => {
    let ages = new Age(56, 4.72);
    expect(ages.age).toEqual(56);
    expect(ages.altAge).toEqual(4.72);
    expect(ages.jupiter()).toEqual(4.72);
  });
});
