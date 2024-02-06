// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.

function capitalize() {
  let arguments = process.argv.slice(2);
  let result = "";

  if (arguments.length === 0) {
    console.log("Pass some Words");
    return;
  }

  arguments.forEach((word) => {
    let letter = word.charCodeAt(0);
    if (letter >= 97 && letter <= 122) {
      letter = String.fromCharCode(letter - 32);
    } else {
      letter = String.fromCharCode(letter);
    }
    word = word.split("");
    word.splice(0, 1, letter);
    word = word.join("");
    result += word + " ";
  });

  console.log(result);
}

capitalize();
