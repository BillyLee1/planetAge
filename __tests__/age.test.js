import Age from "../src/age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let ages = new Age(21);
    expect(ages.age).toEqual(21);
  });

  test('It should return the age of person on Mercury', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.mercury()).toEqual(233.33);
  });

  test('It should return the age of person on Venus', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.venus()).toEqual(90.32);
  });

  test('It should return the age of person on Mars', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.mars()).toEqual(29.79);
  });

  test('It should return the age of person on Jupiter', () => {
    let ages = new Age(56);
    expect(ages.age).toEqual(56);
    expect(ages.jupiter()).toEqual(4.72);
  });

  test('It should return future age and past age', () => {
    let ages = new Age(56, 10, 12);
    expect(ages.agePast).toEqual(10);
    expect(ages.ageFuture).toEqual(12);
  });

  test('It should return future age for Mercury', () => {
    let ages = new Age(56, 10, 12);
    ages.age = ages.ageFuture;
    ages.fBday = ages.mercury();
    expect(ages.mercury()).toEqual(50);
  });
});
