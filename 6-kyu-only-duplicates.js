// Given a string, remove any characters that are unique from the string.

// Example:
// input: "abccdefee"
// output: "cceee"


function onlyDuplicates(str) {
    const arr = str.toLowerCase().split('')
    return arr.filter((l) => arr.indexOf(l) !== arr.lastIndexOf(l)).join('')
  }