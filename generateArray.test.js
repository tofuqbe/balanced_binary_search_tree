const generateArray = require("./generateArray");

test("test if generateArray under 100 returns an array object", () => {
  expect(Array.isArray(generateArray.under100())).toEqual(true);
});

test("test if generateArray over 100 returns an array object", () => {
  expect(Array.isArray(generateArray.over100())).toEqual(true);
});

test("test if generateArray under 100 returns a length of 10", () => {
  expect(generateArray.under100().length).toEqual(10);
});

test("test if generateArray over 100 returns a length of 10", () => {
  expect(generateArray.over100().length).toEqual(10);
});

test("test if 10 instances of generateArray under 100 - 100 numbers - are all numbers under 100.", () => {
  let bool = true;
  let i = 1;

  while (i <= 10) {
    generateArray.under100().forEach((num) => {
      return num < 100 ? bool : (bool = false);
    });
    i++;
  }

  console.log(bool);

  expect(bool).toEqual(true);
});

test("test if 10 instances of generateArray over 100 - 100 numbers - are all numbers over 100.", () => {
  let bool = true;
  let i = 1;

  while (i <= 10) {
    generateArray.over100().forEach((num) => {
      return num > 100 ? bool : (bool = false);
    });
    i++;
  }

  console.log(bool);

  expect(bool).toEqual(true);
});
