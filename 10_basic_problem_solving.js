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


//? Problem 3: Check for Palindrome

function isPalindrome(str) {
  const strReverse = str.split("").reverse().join("")
  let boolean;
  if(str === strReverse) {
    boolean = true;
  } else {
    boolean = false
  }
  console.log(boolean)
}

// isPalindrome('madam')


//? Problem 4: Find the Maximum Number

function findMaxNumber(arr) {
  let currentMax = arr[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > currentMax) {
      currentMax = arr[i]
    }
  }
  console.log(currentMax)
}

// findMaxNumber([5, 1, 9, 3])


//? Problem 5: Remove Duplicates from an Array

function removeDuplicatesFromArr(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
}

// removeDuplicatesFromArr([1, 2, 2, 3, 4, 4]);