module.exports = function binarySearch(arr, number) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (arr[mid] === number) {
      return mid;
    } else if (arr[mid] < number) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
