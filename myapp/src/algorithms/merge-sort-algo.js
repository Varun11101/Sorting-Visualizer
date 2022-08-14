const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const a_l = arr.slice(0, middle);
  const a_r = arr.slice(middle, arr.length);
  const a = mergeSort(a_l);
  const b = mergeSort(a_r);
  const c = [];
  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }
  return c;
};

export { mergeSort };
