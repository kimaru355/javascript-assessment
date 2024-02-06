function fizzbuzz(limit) {
  let number;

  for (number = 1; number <= limit; number++) {
    if (number % 15 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    }
  }
}

fizzbuzz(100);
