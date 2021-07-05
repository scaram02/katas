// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// "aabBcde" -> 2

function duplicateCount(text){
    const arr = text.toLowerCase().split('')
    const dups = arr.filter((l) => arr.indexOf(l) != arr.lastIndexOf(l))
    return new Set([...dups]).size
   }
   