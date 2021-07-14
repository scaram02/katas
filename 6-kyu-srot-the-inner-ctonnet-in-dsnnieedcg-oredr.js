// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"

// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces.

function sortTheInnerContent(words){
    let arr = words.split(' ')
    
    let mapped = arr.map((word) => {
      if (word.length <= 2) return word
     
      return word[0] + word.split('').slice(1, -1).sort().reverse().join('') + word[word.length-1]
    })
    
    return mapped.join(' ')
  }