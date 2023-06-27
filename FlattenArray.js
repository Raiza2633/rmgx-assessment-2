function flattenArray(items) {
  const res = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...flattenArray(item));
    } else {
      res.push(item);
    }
  });

  return res;
}

console.log(flattenArray([[1, 2], [3, [4, 5]], 6])); // returns [1,2,3,4,5,6]
