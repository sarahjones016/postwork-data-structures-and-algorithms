function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
  // If n is 0 or 1, you will use 0 or 1
  // If n is greater than 2, fib(n) will have been solved via previous calls

  // fib(0)
    // return 0
  // fib(1)
    // return 1
  // fib(2)
    // fib(2-1) + fib(2-2)
    // fib(1) + fib(0)
    // return 1 + 0 => 1
  // fib(3)
    // fib(3-1) + fib(3-2)
    // fib(2) + fib(1)
    // return 1 (see previous call!) + 1 => 2
  // fib(4)
    // fib(4-1) + fib(4-2)
    // fib(3) + fib(2)
    // return 2 (see previous call!) + 1 (see call 2 back!) => 3
  // fib(5) 
    // fib(5-1) + fib(5-2)
    // fib(4) + fib(3)
    // return 3 + 2 => 5

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

// JAVASCRIPT LOOP
// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   const values = [0, 1];

//   for (let i = 0; i < n - 1; ++i) {
//     values.push(values[values.length - 1] + values[values.length - 2]);
//   }

//   return values[values.length - 1];
// }