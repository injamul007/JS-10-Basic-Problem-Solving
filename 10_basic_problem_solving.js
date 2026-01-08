//? Problem 1: Reverse a String

function reversString(str) {
  const reverse = str.split("").reverse().join("")

  return reverse;
}

const reverseStr = reversString('hello')

// console.log(reverseStr)


//? Problem 2: Count Vowels in a String

function countVowels(str) {
  let count = 0;
  const allVowel = "AEIOU".toLowerCase();
  const strLowerCase = str.toLowerCase()

  for(let i = 0; i < strLowerCase.length; i++) {
    if(allVowel.includes(strLowerCase[i])) {
      count++
    }
  }
  console.log(count)
}

// countVowels("programming")