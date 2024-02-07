// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.

function countVowels() {
  let arguments = process.argv.splice(2);

  const countTheVowels = (sentence) => {
    sentence = sentence.split("");
    vowels = "aeiouAEIOU";
    count = 0;

    sentence.forEach((letter) => {
      if (vowels.includes(letter)) {
        count++;
      }
    });
    return count;
  };

  arguments = arguments.join(" ");
  console.log(countTheVowels(arguments));
}

countVowels();
