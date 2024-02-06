function powerOfTwo(integer) {
  if (typeof integer !== "number") {
    console.log(integer, "is not integer");
    return;
  } else if (integer % 2 !== 0) {
    console.log(`${integer} is not a power of 2`);
    return;
  }

  while (true) {
    //
  }

  const checkPowerTwo = (number) => {
    if (number % 2 !== 0) {
      return -1;
    }
    if (number === 1) {
      return 0;
    }
  };
}

powerOfTwo(8);
