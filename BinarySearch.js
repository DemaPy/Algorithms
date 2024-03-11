const binarySearch = (arr, findItem) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === findItem) {
      return mid;
    }

    if (arr[mid] < findItem) {
      start = mid + 1; // Отбрасываем левую часть массива
    } else {
      end = mid - 1; // Отбрасываем правую часть массива
    }
  }

  return -1;
};
