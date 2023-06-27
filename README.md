# RMGX Frontend Assessment 2

### Question 1:

Write a function called is Anagram that takes two strings as input and returns true if they are anagrams, and false otherwise. Anagrams are words or phrases formed by rearranging the letters of another word or phrase. For example, given the input strings "listen" and "silent", the function should return true.

```
function isAnagram(str1, str2) {
  if (
    str1.length !== str2.length ||
    typeof str1 !== "string" ||
    typeof str2 !== "string"
  ) {
    return false;
  }

  let n1 = str1.split("").sort();
  let n2 = str2.split("").sort();

  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
      return false;
    }
  }

  return true;
}

// sample output
console.log(isAnagram("listen", "silent")); // returns true
console.log(isAnagram("hello", "world")); // returns false

```

### Question 2:

Write a function called Flatten Array that takes an array of nested arrays as input and returns a new array with all the elements flattened into a single level. For example, given the input array [[1, 2], [3, [4, 5]], 6], the function should return [1, 2, 3, 4, 5, 6].

```
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

```
