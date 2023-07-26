function romanNumeral(string) {

  let romanSymbols = [
    {symbol: "I", value: 1},
    {symbol: "V", value: 5},
    {symbol: "X", value: 10},
    {symbol: "L", value: 50},
    {symbol: "C", value: 100},
    {symbol: "D", value: 500},
    {symbol: "M", value: 1000},
  ]

  let arrNums = []

  if (string.length === 1) {
    for (object of romanSymbols) {
      if (string === object.symbol) {
        return object.value
      }
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      
      for (object of romanSymbols) {
        if (string[i] === object.symbol) {
          // console.log(object.value)
          arrNums.push(object.value)
        }
      }
      
    }
  }

  let total = Math.max(...arrNums)

  for (let i = 0; i < arrNums.length; i++) {
     if (i < arrNums.indexOf(total)) {
       total -= arrNums[i]
     } else if (i > arrNums.indexOf(total)) {
       total += arrNums[i]
     } else {
      total += 0
     }
     
  }

console.log(arrNums)
return total 

  // set variables for the Roman symbols (1, 5, 10, 50, 100, 500, 1000)
  // if length of string is 1, return the value of said variable
  // if length of string is greater than 1, we want to identify the Roman symbols largest to smallest (though their location in the string DOES matter)
  // 
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
