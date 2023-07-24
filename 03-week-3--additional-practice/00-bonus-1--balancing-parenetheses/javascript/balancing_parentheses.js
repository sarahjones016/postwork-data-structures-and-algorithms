function balancingParentheses(string) {
 
// let missing = 0

// for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(") {
//       missing += 1
//     } else if (string[i] === ")") {
//       missing -= 1
//     }
// }
// return Math.abs(missing)

// * initialize missing to 0 (will store unmatched closing parens count)
// * initialize openings to 0 (will store opening parens count)
// *
// * iterate over string:
// *   if char == '(':
// *     increment openings
// *   else:
// *     if openings is 0:
// *       increment missing
// *     else:
// *       decrement openings
// *
// * return missing + openings

  let missing = 0
  let openings = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      openings++
    } else {
      if (openings === 0) {
        missing++
      } else {
        openings--
      }
    }
  }
return missing + openings

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
