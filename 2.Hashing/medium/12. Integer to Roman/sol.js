// Define a function to convert an integer to a Roman numeral
var intToRoman = function (num) {
  // Define arrays to store Roman numeral characters and their corresponding integer values
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Set the length of the integer array to a variable for easy access
  const n = int.length;

  // Initialize an empty string to store the Roman numeral representation
  let res = "";

  // Iterate through the integer array
  for (let i = 0; i < n; i++) {
    // While the input number is greater than or equal to the current integer value
    while (num >= int[i]) {
      // Append the corresponding Roman numeral character to the result string
      res += roman[i];
      // Subtract the integer value from the input number
      num -= int[i];
    }
  }

  // Return the Roman numeral representation
  return res;
};

console.log(intToRoman(2834));
