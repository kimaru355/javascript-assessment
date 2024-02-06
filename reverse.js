// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit ordering.

function reverse() {
  let arguments = process.argv.slice(2);

  const reverseNumber = (integer) => {
    console.log(integer);
    while (integer % 10 === 0) {
      integer /= 10;
    }
    integer = ("" + integer).split("");

    let index = Math.floor(integer.length / 2);
    let first = 0;
    let counter = 0;
    console.log(integer, index);
    while (index >= 0) {
      first = integer[index];
      counter++;
      if (counter > 1) {
        break;
      }
      console.log(integer);
      integer.splice(
        index,
        1,
        integer.splice(
          integer.length - index === integer.length
            ? -1
            : integer.length - index
        )
      );
      console.log(integer);
      integer.splice(index, 0, first);
      index++;
    }
    integer = integer.join("");
    return +integer;
  };

  arguments.forEach((integer) => {
    if (+integer < 0) {
      console.log(reverseNumber(+integer * -1) * -1);
    } else {
      console.log(reverseNumber(+integer));
    }
  });
}

reverse();
