// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
  
    const arr = str.replace(/[0-9]+/g, '').split('')
    
    return arr.map((letter) => { 
      if (letter === letter.toUpperCase()){
       return "-" + letter.toLowerCase()
      }
      
       return letter
      
    }).join('')
  
  }