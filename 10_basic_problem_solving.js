//? Problem 1: Reverse a String

function reversString(str) {
  const reverse = str.split("").reverse().join("")

  return reverse;
}

const reverseStr = reversString('hello')

// console.log(reverseStr)