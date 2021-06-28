module.exports = function insertShiftArray(arr, number) {
  let newArr = [];
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    newArr.push(arr[i]);
  }
  newArr.push(number);
  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
