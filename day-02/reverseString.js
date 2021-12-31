const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    const splitStr = str.split("");
    const reverseStrArray = splitStr.reverse();
    const joinReverseStrArray = reverseStrArray.join("");
    return joinReverseStrArray;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
