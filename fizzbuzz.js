function fizzbuzz(limit) {
  let limit = 100;
  let number;

  for (number = 1; number <= limit; number++) {
    // prioritize multiple of both 3 and 5 first
    if (number % 15 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    }
  }
}

fizzbuzz();
