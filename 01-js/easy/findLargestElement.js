/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {    
    var largest = numbers.reduce(function(total,num){return num>total?num:total},numbers[0])
    // console.log(largest)
    return largest
}

module.exports = findLargestElement;