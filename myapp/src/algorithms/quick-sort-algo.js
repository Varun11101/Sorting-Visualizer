// var items = [5, 3, 7, 6, 2, 9];
let swapo = [];

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
    var middle = Math.floor((right + left) / 2);
    var pivot = items[middle], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
        swapo.push([i, middle, 2]);
      i++;
    }
    while (items[j] > pivot) {
        swapo.push([j, middle, 2]);
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      if(i!=j)swapo.push([i, j, 3]);
      if(i!=j)swapo.push([i, j, 1]);
      i++;
      j--;
    }
  }
  return i;
}

function rquickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      rquickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      rquickSort(items, index, right);
    }
  }
  return items;
}

function quickSort(arr) {
  swapo = [];
  const items = [...arr];
  rquickSort(items, 0, items.length - 1);
  return swapo;
}

export { quickSort };
