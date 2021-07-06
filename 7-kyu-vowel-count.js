// Return the number (count) of vowels in the given string. 

function getCount(str) {
    const vows = 'aeiou'.split('')
    return str.split('').filter((l) => vows.includes(l)).length
}