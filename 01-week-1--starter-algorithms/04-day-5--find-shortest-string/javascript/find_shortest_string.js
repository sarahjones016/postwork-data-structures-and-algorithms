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
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
