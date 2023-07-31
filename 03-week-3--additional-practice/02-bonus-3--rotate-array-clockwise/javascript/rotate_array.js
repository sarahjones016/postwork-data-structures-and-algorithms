function rotateArray(arr, k) {

let removed = []

for (n of arr) {
  if ((arr.indexOf(n) + k) >= arr.length) {
    // console.log(n)
    removed = arr.splice(arr.indexOf(n), 1)
    // console.log(removed)
    
    
  }
  // console.log(removed)
  // console.log(arr)
}
  
  // console.log(removed)
    // return removed.concat(arr)


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
