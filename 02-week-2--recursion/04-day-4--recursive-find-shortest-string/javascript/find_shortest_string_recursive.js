function findShortestStringRecursive(arr) {
  // if there is only 1 string in the array, return that string
  if (arr.length === 1) {
    return arr[0]
  }

  // otherwise, look at the strings in the array besides the first one. 
  const result = findShortestStringRecursive(arr.slice(1));
  // result = findShortestStringRecursive(['hi', 'dog', 'an'])

  // return arr[0].length <= result.length ? arr[0] : result;
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

 
