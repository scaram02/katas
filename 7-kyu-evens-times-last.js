// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


function evenLast(numbers) {
  
    if (!numbers.length) return 0
    
     let evens = numbers.filter((n, i) => i % 2 === 0).reduce((a,b) => a+b)
     
     let lastInt = numbers[numbers.length-1]
     
     return evens * lastInt
  }