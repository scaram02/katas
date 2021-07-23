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

    let numOfTrailingZeros = n.toString().lastIndexOf('0') - n.toString().indexOf('0') + 1 // if has zeroes is above 1
  console.log("num trainl", numOfTrailingZeros)
  let string;
  if (numOfTrailingZeros > 1){
    string = n.toString().split('').reverse().join('')
    } else {
      string = n.toString()
    }
    
   const almost =  string.split('').map((digit, index) => {
      return (index > 0 && index % 3 === 0)? `,${digit}` : digit
    }).join('')
  
  return almost.split(',').reverse().join(',')
  
  
    
  }
  groupByCommas(10000)