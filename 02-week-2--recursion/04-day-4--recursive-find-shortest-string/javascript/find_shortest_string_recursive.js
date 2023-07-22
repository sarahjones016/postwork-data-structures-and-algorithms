function findShortestStringRecursive(arr) {

  // base case: check if length of array is 1, if yes, return string
  // if length > 1, extract first string from array
  // call function again with array minus first string
  // compare length of first string with result of recursion
  // if first string < rest of array, return first string
  // otherwise return shortest string found from recursive call

  if (arr.length === 1) {
    return arr[0]
  }

  const result = findShortestStringRecursive(arr.slice(1));

  // arr[0] = 'cat'
  // result = findShortestStringRecursive(['hi', 'dog', 'an'])

  // arr[0] = 'hi'
  // result = findShortestStringRecursive(['dog', 'an'])

  // arr[0] = 'dog'
  // result = findShortestStringRecursive(['an'])

  // an < dog (move forward with an)
  // hi = an (move forward with hi)
  // hi < cat (return hi)


  // https://medium.com/@bwithchewoo/learning-algorithms-with-ruby-day-2-95eb60f292cd


  if (arr[0].length <= result.length) {
    return arr[0]
  } else {
     return result
  }
   
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// JAVASCRIPT ITERATION

// function findShortestString(arr) {
//   let shortest = arr[0];

//   for (string of arr) {
//     if (string.length < shortest.length) {
//       shortest = string;
//     }
//   }
//   return shortest;
// }

 
