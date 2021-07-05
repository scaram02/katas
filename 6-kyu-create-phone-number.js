// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    const joined = numbers.map((n) => n.toString()).join('')
    return `(${joined.slice(0,3)}) ${joined.slice(3, 6)}-${joined.slice(6)}`
  }