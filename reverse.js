// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit ordering.

function reverse() {
  let numbers = process.argv.slice(2);

  const reverseNumber = (integer) => {
    // remove extra 0s
    while (integer % 10 === 0) {
      integer /= 10;
    }
    integer = ("" + integer).split("");

    let index = 0;
    while (index < Math.floor(integer.length / 2)) {
      const temp = integer[index];
      integer[index] = integer[integer.length - 1 - index];
      integer[integer.length - 1 - index] = temp;
      index++;
    }
    integer = integer.join("");
    return +integer;
  };

  numbers.forEach((integer) => {
    if (+integer < 0) {
      console.log(reverseNumber(+integer * -1) * -1);
    } else {
      console.log(reverseNumber(+integer));
    }
  });
}

reverse();
