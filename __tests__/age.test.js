import Age from "../src/age.js";

describe('Age', () => {

  test('It should return an age in the object', () => {
    let age = Age();
    expect().toEqual(21);
  });
});
