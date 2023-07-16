function findShortestString(arr) {

  // Create an empty dictionary
  // For of loop: Loop through the strings in the array
  // Add each string to the empty dictionary:
    // Value = the length of the string
  
  // Loop through the dictionary:
    // Find the minimum value, and return the key (the string)

    new_dict = {}
    length_array = []

    for (string of arr) {
      new_dict[string] = string.length
      length_array.push(string.length)
    }

    for (string of length_array) {
      min = Math.min(...length_array)
    }

    for (key in new_dict) {
      if (new_dict[key] === min) {
        return key
      }
    }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
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
    // findShortestString(["sarah", "emma", "roux"])
    findShortestString(longInput)
  }

  // average runtime = (current time - start time) / 2000
  averageRuntime = (Date.now() - startTime) / 2000

  console.log(averageRuntime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
