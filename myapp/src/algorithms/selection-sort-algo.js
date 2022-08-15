const selectionSort = (originalList) => {
  //we first copy the array to avoid modifying the original array, since objects are passed by reference in JS
  const list = [...originalList];
  const swapArray = [];
  const len = list.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      swapArray.push([min, j, 2]);
      if (list[min] > list[j]) {
        min = j;
      }
    }
    if (min !== i) {
      // a new minimum is found. Swap that with the current element
      [list[i], list[min]] = [list[min], list[i]];
      swapArray.push([i, min, 3]);
      swapArray.push([i, min, 1]);
    }
  }
  return swapArray;
};

// const listOfNumbers = [1, 6, 3, 4, 5];
// console.log(selectionSort(listOfNumbers)); //[1,3,4,5,6]
export {selectionSort};