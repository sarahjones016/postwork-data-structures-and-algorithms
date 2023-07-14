function fibonacci(num) {

  // This solves for 0 and 1
  if (num < 2) {
    return num;
  }
  
  // Instead of creating an empty array that we add to, we create an array of the last 2 numbers, and update that as "num" changes
  // lastTwo starts as [0,1], because that's what it would look like for num = 2, the start of this for loop
  // Our counter (i) starts at 0. So long as i is less than num - 1, the loop runs and i (the counter) increases
  // "sum" is the sum of the array
  // lastTwo then updates to be [2nd number in current lastTwo, sum]. 
  // We then return index 1 in lastTwo, which is the sum of the previous lastTwo elements.
  let lastTwo = [0, 1];

  for (let i = 0; i < num - 1; i++) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum];
  }

  return lastTwo[1];


  // FIRST ATTEMPT: WRONG APPROACH
  // create an empty array
  // let nums_arr = []
 
  // if num == 1, append 0 to array
  // if num == 2, append 0 and 1 to array
  // if num > 2, append 0 and 1 to array. also append the sum of the two previous values, until the length of the array = num

  // if (num == 1) {
  //   nums_arr.push(0)
  // } else if (num == 2) {
  //   nums_arr.push(0, 1)
  // } else {
  //   nums_arr.push(0, 1)
  //   while (nums_arr.length <= num) {
  //     nums_arr.push(nums_arr.slice(-1) + nums_arr.slice(-2))
  //   }
  // }

  // return nums_arr
  // return nums_arr.slice(-1) 
  // return nums_arr

}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
