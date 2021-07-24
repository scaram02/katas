// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647
// Examples

//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {

    // reverse the number
  let string = n.toString().split('').reverse().join('')
  
   // add commas based on index 
  let commaed =  string.split('').map((digit, index) => {
      return (index > 0 && index % 3 === 0)? `${digit},` : digit
    }).reverse().join('')
  
  
  return (n < 1000)? n.toString() : commaed
    
  }