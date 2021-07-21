// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57

function solve(s) {
    let vows = "aeiou".split('')
    
    // remove vowels
    let noVows = s.split('').map((letter) => {
       return vows.includes(letter)? ' ' : letter
     }).join('')
    
     // parse into substrings
     let subs = noVows.split(' ').filter((s) => s.length)
   
     // find the score based on letters' places in alphabet
     let alpha = "-abcdefghijklmnopqrstuvwxyz"
     let scored = subs.map((sub) => sub.split('').map((letter) => alpha.indexOf(letter)).reduce((a, b) => a+b))
     
     return Math.max(...scored)
   };