function selectionSortRecursive(arr) {

  if (arr.length === 0) {
    return []
  }

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;

// START: the length of the array is not 0, so we will run the recursion until it is, and go backwards back up the stack

  // min = -1
  // idx = 1
  // arr.splice(1, 1) => arr = [3, 5, 2]
  // result = selectionSortRecursive([3, 5, 2])
    // min = 2
    // idx = 2
    // arr.splice(2, 1) => arr = [3, 5]
    // result = selectionSortRecursive([3, 5])
      // min = 3
      // idx = 0
      // arr.splice(0, 1) => arr = [5]
        // min = 5
        // idx = 0
        // arr.splice(0, 1) = arr = [] STOP

  // result.unshift(5) => arr = [5]
  // result.unshift(3) => arr = [3, 5]
  // result.unshift(2) => arr = [2, 3, 5]
  // result.unshfit(-1) => arr = [-1, 2, 3, 5]

  // return [-1, 2, 3, 5]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// JAVASCRIPT ITERATION
// function selectionSort(arr) {
//   const sorted = [];

//   while (arr.length > 0) {
//     const min = Math.min(...arr);
//     const idx = arr.indexOf(min);

//     sorted.push(min);
//     arr.splice(idx, 1);
//   }

//   return sorted;
// }

// CREATE AN EMPTY ARRAY
// WHILE THE LENGTH OF THE INPUT ARRAY IS GREATER THAN 0:
    // THE VARIABLE 'min' IS THE MINIMUM VALUE WITHIN THAT INPUT ARRAY
    // THE VARIABLE 'idx' IS THE INDEX OF THE VARIABLE 'min'
    // APPEND 'min" TO THE EMPTY ARRAY (sorted)
    // REMOVE THE 'min" VALUE FROM THE INPUT ARRAY (the allows for a new 'min' to exist)
// RETURN THE NEW ARRAY 