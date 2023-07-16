function selectionSort(arr) {
  // OPTION: Use "sort" (built in method) to sort the array and then return it
  // arr.sort()
  // return arr

  // OPTION: 
  // Create an empty array. 
  // Loop through the input array (arr) and find the smallest value (using Math.min)
  // Find the index of the smallest value using indexOf
  // append (push) the minimum value to the new array and remove it from the old array (using splice)
  // Continue to do that so long as there are elements in the old array (length of old array is greater than 0)

  new_arr = []

  while (arr.length > 0) {
    let min = Math.min(...arr)
    let idx = arr.indexOf(min)
    
    new_arr.push(min)
    arr.splice(idx, 1)
    
  }
  return new_arr
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  // store the current time in a variable called start time
  startTime = Date.now()

  // loop 1000 times:
  //   execute the method using a small input, e.g. three items if input is an Array
  //   execute the method using a larger input, e.g. 100 items if input is an Array

  for (i = 0; i < 1000; i++) {
    selectionSort([5, -1, 2])
    selectionSort([longInput])
  }

  // average runtime = (current time - start time) / 2000
  averageRunTime = (Date.now() - startTime) / 2000

  console.log(averageRunTime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
