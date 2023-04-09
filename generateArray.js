// Generates a random array of 11 integers from -50 to 50.
const generateArray = (() => {
  const under100 = (array = []) => {
    array.push(Math.floor(Math.random() * 99));
    if (array.length < 10) generateArray.under100(array);
    return array;
  };

  const over100 = (array = []) => {
    array.push(Math.floor(Math.random() * 99 + 101));
    if (array.length < 10) generateArray.over100(array);
    return array;
  };
  return { under100, over100 };
})();

module.exports = generateArray;
