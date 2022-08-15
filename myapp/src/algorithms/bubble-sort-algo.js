const bubbleSort = (originalArray) => {
  let swapped = false;

  const a = [...originalArray];
  const swapsArray = [];

  let len = a.length;
  for (let i = 1; i < len; i++) {
    swapped = false;

    for (let j = 0; j < len - i; j++) {
      swapsArray.push([j, j+1, 2]);
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapsArray.push([j, j + 1, 3]);
        swapsArray.push([j, j+1, 1]);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return swapsArray;
};

export { bubbleSort };
