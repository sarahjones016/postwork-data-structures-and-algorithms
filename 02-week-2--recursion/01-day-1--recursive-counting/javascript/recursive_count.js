function recursiveCount(num = 0) {

  if (num >= 10) {
    return num
  }

  console.log(num)
  recursiveCount(num + 1)

  // console.log(num)
}

// Initial Call (execution incomplete, paused on recursive call):
    // recursiveCount(0)
// Recursive Call 1 (execution incomplete, paused on recursive call):
    // recursiveCount(1)
// Recursive Call 2 (execution incomplete, paused on recursive call):
    // recursiveCount(2)
// Recursive Call 3 (execution incomplete, paused on recursive call):
    // recursiveCount(3)
// Recursive Call 4 (execution incomplete, paused on recursive call):
    // recursiveCount(4)
// Recursive Call 5 (execution incomplete, paused on recursive call):
    // recursiveCount(5)
// Recursive Call 6 (execution incomplete, paused on recursive call):
    // recursiveCount(6)
// Recursive Call 7 (execution incomplete, paused on recursive call):
    // recursiveCount(7)
// Recursive Call 8 (execution incomplete, paused on recursive call):
    // recursiveCount(8)
// Recursive Call 9 (execution incomplete, paused on recursive call):
    // recursiveCount(9)
// Recursive Call 10 (execution incomplete, paused on recursive call):
    // recursiveCount(10)

// => Base case is hit because num >= 10, no more recursion!


// JAVASCRIPT WHILE LOOP
// let count = 0;

// while (count < 10) {
//   console.log(count);
//   ++count;
// }



if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution


