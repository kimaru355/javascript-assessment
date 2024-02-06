function fibonacci(limit) {
  let number;
  let prevNumbers = [];

  for (number = 0; number <= limit; number++) {
    if (prevNumbers.length < 2) {
      prevNumbers.push(number);
      continue;
    }
    if (
      prevNumbers[prevNumbers.length - 1] +
        prevNumbers[prevNumbers.length - 2] ===
      number
    ) {
      console(prevNumbers);
      prevNumbers.push(number);
    }
  }

  prevNumbers.forEach((number) => {
    console.log(number);
  });
}

fibonacci(100);
