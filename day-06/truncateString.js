const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
   const strArray = str.split(' ')
   const requireStrArray = strArray.slice(0, wordLimit);
   const finalString = requireStrArray.join(' ')
    return finalString
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
