// Given a positive integer as input, return the output as a string in the following format:

// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.
// Examples
// Input 	Output
// 0 	""
// 56 	"5*10+6"
// 60 	"6*10"
// 999 	"9*100+9*10+9"
// 10004 	"1*10000+4"


function simplify(number){
  
    if (number === 0) return ''
    if (number < 10) return number
    
    
    let numArray = number.toString().split('')
    
    let mapped = numArray.map((d, i) => {
      
      // show if this is in the 10s, 100s, 1000s...place
      let calculatedHundredsPlace = numArray.length - i - 1
      
      // multiply accordingly
      return`${d}*1${'0'.repeat(calculatedHundredsPlace)}`
    })
    
   // separates by 10s
   let tens = mapped.map((bunch) => bunch.split('*'))
   
   // solves for numbers ending in zero, adds right punctuation
   let digits  = tens.filter((b) => b[0] != '0').map((b) => b.join('*')).join('+')
   
    // correct the ones place so it's not x * 1
   let onesDigit = digits.lastIndexOf('1')
  
   return (onesDigit === digits.length-1 )? digits.slice(0, onesDigit-1)  : digits                        
    
    
    
  }