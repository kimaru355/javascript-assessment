function powerOfTwo(integer) {
  if (typeof integer !== "number" || (integer % 2 !== 0 && integer !== 1)) {
    return false;
  }

  number = integer;
  while (true) {
    if (number === 1) {
      return true;
    } else if (number % 2 !== 0 || number <= 0) {
      return false;
    }
    number /= 2;
  }
}

let arguments = process.argv.slice(2);

if (arguments.length === 0) {
  console.log("Pass one or more numbers");
  return;
}

arguments.forEach((number) => {
  if (isNaN(+number)) {
    console.log(`${number} is not a number`);
  } else {
    console.log(powerOfTwo(+number));
  }
});
