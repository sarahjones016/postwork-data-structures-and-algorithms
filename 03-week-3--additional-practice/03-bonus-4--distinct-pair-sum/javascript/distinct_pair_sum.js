function distinctPairSum(arr, k) {

  let index = -1
  let num1
  let num2
  let container = []
  
  for (num of arr) {
    index++

    if ((num !== num1) && (num !== num2)) {
      if (arr[index] + arr[index + 1] === k) {
        num1 = arr[index]
        num2 = arr[index + 1]
        container.push([num1, num2])
      }  
    } 
  }
  return container

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
