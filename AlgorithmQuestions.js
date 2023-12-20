
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 

//option 1
const isPalindrome = (word) => {
  let leftIdx = 0;
  let rightIdx = word.length - 1;

  while (leftIdx < rightIdx) {
    if (word[leftIdx] !== word[rightIdx]) {
      return false;
    }
  }
  return true;
};


    //OR option 2


const isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("")
 if (word !== reversedWord) {
     return false 
} 
return true 
}


console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE




/TASK 2
//Pseudo code
 const isMissing = (arrayInput) => {
    let missing = 0
    let sortedArray = arrayInput.sort()
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
            return [i]
        }
        // more if else to follow

//}


///console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
//console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
//console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
//console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
//console.log(isMissing([ 1, 3, 7, 5, 6, 2,'cfg' ])) // THROW ERROR Invalid input, non-numeric value detected
