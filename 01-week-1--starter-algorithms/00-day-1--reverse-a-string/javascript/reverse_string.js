// for loop - loops through a block of code a number of times
// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases/decreases a value (i++/i--) each time the code block in the loop has been executed.

function reverseString(str) {

  // create a variable for a new string
  // create a for loop
  // within this loop, a variable (i) will equal the last index of the string (length of the string - 1)
  // while that variable is greater than or equal to 0 (aka all the possible indexes of the string), we want to decrease it with each loop
  // while each loop runs, we want to update the new string variable with the letter that sits within the 'i' index in the original string. That index starts at the last letter in the string, and the moves towards the first letter of the string with each loop

  let inverse = ""

  for (let i = str.length - 1; i >= 0; i--) {
    inverse += str[i];
  }
  return inverse

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'sarah jones is cool'");
  console.log("=>", reverseString("looc si senoj haras"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
