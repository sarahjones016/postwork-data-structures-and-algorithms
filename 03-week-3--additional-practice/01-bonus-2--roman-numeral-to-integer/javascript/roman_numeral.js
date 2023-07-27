function romanNumeral(string) {

//   let romanSymbols = [
//     {symbol: "I", value: 1},
//     {symbol: "V", value: 5},
//     {symbol: "X", value: 10},
//     {symbol: "L", value: 50},
//     {symbol: "C", value: 100},
//     {symbol: "D", value: 500},
//     {symbol: "M", value: 1000},
//   ]

//   let arrNums = []

//   if (string.length === 1) {
//     for (object of romanSymbols) {
//       if (string === object.symbol) {
//         return object.value
//       }
//     }
//   } else {
//     for (let i = 0; i < string.length; i++) {
      
//       for (object of romanSymbols) {
//         if (string[i] === object.symbol) {
//           arrNums.push(object.value)
//         }
//       }
//     }
//   }

//   let max = Math.max(...arrNums)
//   let total = Math.max(...arrNums)

//   for (let i = 0; i < arrNums.length; i++) {
//      if (i < arrNums.indexOf(max)) {
//        total -= arrNums[i]
//      } else if (i > arrNums.indexOf(max)) {
//         total += arrNums[i]
//      }
//   }
// return total 

const romans = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};
let total = 0;
let idx = 0;

while (idx < string.length) {
  const twoChar = string[idx] + (string[idx + 1] || '');
  
  if (romans[twoChar] !== undefined) {
    total += romans[twoChar];
    idx += 2;
  } else {
    total += romans[string[idx]];
    idx += 1;
  }
}

return total;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
