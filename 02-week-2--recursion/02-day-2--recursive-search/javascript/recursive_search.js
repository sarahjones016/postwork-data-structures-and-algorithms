function recursiveSearch(arr, target) {
  // count = 0

  // if (arr[count] === target) {
  //   return target
  // }

  // recursiveSearch(arr[count + 1], target)

  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true;
  }

  return recursiveSearch(arr.slice(1), target);
  // By using slice(1), we are continuing to move through the array, redefining arr[0]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

// JAVASCRIPT LOOP
// function iterativeSearch(arr, target) {
//   for (const value of arr) {
//     if (value === target) {
//       return true;
//     }
//   }

//   return false;
// }
