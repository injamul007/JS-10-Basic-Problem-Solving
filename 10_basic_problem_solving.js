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


//? Problem 6: Sum of All Numbers in an Array

function sumOfAllNum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  console.log(sum)
}

// sumOfAllNum([1, 2, 3, 4])


//? Problem 7: Find Even Numbers in an Array

function evenNumInArr(arr) {
  const evenNumArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      evenNumArr.push(arr[i])
    }
  }
  console.log(evenNumArr)
}

// evenNumInArr([1, 2, 3, 4, 5, 6])


//? Problem 8: Capitalize First Letter of Each Word

function capitalizeFirstLetter(str) {
  const wordsInArr = str.split(" ")
  let backToStr = ''
  
  for(let i = 0; i < wordsInArr.length; i++) {
    backToStr = backToStr + " " + wordsInArr[i][0].toUpperCase() + wordsInArr[i].slice(1)
  }
  console.log(backToStr)

}

// capitalizeFirstLetter("hello world")


//? Problem 9: Find the Factorial of a Number

function factorialNumber(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result = result*i
  }
  console.log(result)
}

// factorialNumber(5)


//? Problem 10: PingPong Challenge

function pingPong() {
  for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('pingPong')
    } else if (i % 3 === 0) {
      console.log('ping')
    } else if (i % 5 === 0) {
      console.log('pong')
    } else {
      console.log(i)
    }
  }
}

// pingPong()