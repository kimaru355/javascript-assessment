function fibonacci(limit) {
  let prevNumbers = [0, 1];

  while (true) {
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

fibonacci(100);
