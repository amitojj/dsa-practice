/**
 * Multiplies two numbers represented as strings
 * @param {string} num1
 * @param {string} num2
 * @return {string} The result of the multiplication
 */
var multiply = function (num1, num2) {
  // Check if either number is zero
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  // Calculate the results array
  const results = resultsArr(num1, num2);

  // Add the results of the multiplication and return the sum
  return addResults(results);
};

function resultsArr(num1, num2) {
  // Define an array for converting between string and integer representations of digits
  const hashArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Get the lengths of the input numbers
  let n = num2.length,
    m = num1.length,
    resultInt = 0, // Unused variable
    carry = 0, // Initialize a variable to keep track of carry during multiplication
    results = []; // Initialize an array to store the results

  // Iterate through the digits of num2, starting from the ones place
  for (let i = n - 1, pi = 0; i >= 0; i--, pi++) {
    // Convert the digit at the current index of num2 from string format to integer
    const digit2 = hashArr.indexOf(num2[i]);
    let answer = ""; // Initialize a string to store the result of the multiplication
    // Add trailing zeros based on the position of the digit in num2
    for (let zero = 0; zero < pi; zero++) {
      answer = "0" + answer;
    }
    // Iterate through the digits of num1, starting from the ones place
    for (let j = m - 1, pj = 0; j >= 0; j--, pj++) {
      // Convert the digit at the current index of num1 from string format to integer
      const digit1 = hashArr.indexOf(num1[j]);
      // Multiply the digits and add the carry from the previous multiplication
      const d1Xd2 = digit1 * digit2;
      const dx = (d1Xd2 + carry) % 10; // Calculate the result digit and the carry
      answer = dx + answer; // Prepend the result digit to the answer string
      carry = Math.floor((d1Xd2 + carry) / 10); // Update the carry for the next multiplication
    }
    // Add any remaining carry to the answer string
    if (carry > 0) {
      answer = carry + answer;
      carry = 0;
    }
    // Add the result of the multiplication to the results array
    results.push(answer);
  }
  // Return the array of results
  return results;
}

// Function to add all the results of resultArr
function addResults(arr) {
  // Define an array of strings representing the digits 0-9
  const hashArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Get the length of the input array
  const arl = arr.length;
  // Initialize the answer with the last element of the input array
  let answer = arr[arl - 1];

  // Get the length of the answer
  let ansl = answer.length;
  // Initialize the carry variable
  let carry = 0;
  // Iterate through the input array starting from the second to last element
  for (let i = arl - 2; i >= 0; i--) {
    // Pad the current element with leading zeros if its length is less than the answer's length
    while (arr[i].length < ansl) {
      arr[i] = "0" + arr[i];
    }
    // Initialize a new answer string
    let newAnswer = "";
    // Iterate through the digits of the answer and the current element from right to left
    for (let j = ansl - 1; j >= 0; j--) {
      // Calculate the sum of the corresponding digits and the carry
      const sum = hashArr.indexOf(answer[j]) + hashArr.indexOf(arr[i][j]);
      // Calculate the new digit and the carry for the next iteration
      let digit = (sum + carry) % 10;
      carry = Math.floor((sum + carry) / 10);

      // Prepend the new digit to the new answer string
      newAnswer = digit + newAnswer;
    }
    // Add the remaining carry to the new answer if there's any
    if (carry > 0) {
      newAnswer = carry + newAnswer;
      carry = 0;
    }
    // Update the answer with the new answer and its length
    answer = newAnswer;
    ansl = answer.length;
  }
  // Return the final answer
  return answer;
}
console.log(multiply("123", "456"));
const results = resultsArr("140", "721");
console.log(results);
const addRes = addResults(["140", "2800", "98000"]);
addRes;
