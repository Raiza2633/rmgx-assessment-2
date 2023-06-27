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
