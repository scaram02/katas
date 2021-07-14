
    // Your message is a string containing space separated words.
    // You need to encrypt each word in the message using the following rules:
    //     The first letter needs to be converted to its ASCII code.
    //     The second letter needs to be switched with the last letter
    // Keepin' it simple: There are no special characters in input.

    var encryptThis = function(text) {
  
        if (text.length === 1) return text.charCodeAt(0).toString()
        
        const arr = text.split(' ')
        
        var mappedArray = arr.map((word) => {
          
          const firstLetter = word.charCodeAt(0)
          const lastLetter = word[word.length-1]
          
          if (word.length === 1) return firstLetter.toString()
          if (word.length === 2)  return firstLetter + lastLetter
      
          let notTheFirstPart = lastLetter + word.slice(2, -1) + word[1]
         
          return firstLetter + notTheFirstPart
          
         
        })
       return mappedArray.join(' ')
      }
