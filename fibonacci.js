// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

function fibonacci() {
  let limit = 100;
  let prevNumbers = [0, 1];

  while (true) {
    // Avoid exceeding the limit (100)
    if (
      prevNumbers[prevNumbers.length - 1] +
        prevNumbers[prevNumbers.length - 2] <=
      limit
    ) {
      prevNumbers.push(
        prevNumbers[prevNumbers.length - 1] +
          prevNumbers[prevNumbers.length - 2]
      );
    } else {
      break;
    }
  }

  prevNumbers.forEach((number) => {
    console.log(number);
  });
}

fibonacci();
