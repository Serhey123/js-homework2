const findLongestWord = function (string) {
  const arrayString = string.split(" ");
  let longestWord = arrayString[0];
  for (let i = 1; i < arrayString.length; i += 1) {
    if (arrayString[i].length > longestWord.length) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
