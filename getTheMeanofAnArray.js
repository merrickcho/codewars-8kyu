// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158
//

function getAverage(marks){
    return Math.floor(marks.reduce((p,c) => p+c)/marks.length)
  }