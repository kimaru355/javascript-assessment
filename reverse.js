// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit ordering.

function reverse() {
  let arguments = process.argv.slice(2);

  const reverseNumber = (integer) => {
    while (integer % 10 === 0) {
      integer / 10;
    }
    integer = ("" + integer).split("");

    let index = integer.length / 2 - 1;
    let first = 0;
    while (index >= 0) {
      let first = integer.splice(integer.length - index);
      index++;
    }
  };

  arguments.forEach((integer) => {
    if (integer < 0) {
      console.log(reverseNumber(integer * -1) * -1);
    } else {
      console.log(reverseNumber(integer));
    }
  });
}
