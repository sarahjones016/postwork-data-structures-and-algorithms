function findFirstDuplicate(arr) {
  // create an empty dictionary
  emptyDict = {}

  for (num of arr) {
    if (num in emptyDict) {
      emptyDict[num] += 1
      return num
    } else {
      emptyDict[num] = 1
    }
  }
  
  for (pair in emptyDict) {
    if (emptyDict[num] !== 2) {
      return -1
    }
  }

  //loop through the elements in the array.
  // if the element doesn't exist in the dictionary, add it to the dictionary and set it's value to 1
  // if the element does exist in the dictionary, set it's value to +1 what it currently is and return it's KEY!
  // loop through the {key: value} pairs in the dictionary: if there is no {key: value} pair with a value of 2, return -1


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
