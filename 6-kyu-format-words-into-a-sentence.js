// Complete the method so that it formats the words into a single comma 
//separated value. The last word should be separated by the word 'and' instead of a comma. 
//The method takes in an array of strings and returns a single formatted string.

// Note:
// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

function formatWords(words){

    if (words === null) return "";
    
    const w = words.filter((word) => word)
  
     if (!w.length) return '';
    
     if (w.length === 1) return w[0]
  
    const lastWord = `and ${w.pop()}`
    const newArr = [...w, lastWord]
  
   return newArr.join(', ').replace(/,([^,]*)$/, '$1')
    
  }
  