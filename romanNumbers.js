function convertToRoman(n) {
  const getLetter = (decimal, factor) => {
    const romanLetters = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
    if (factor >= 1 && factor <= 3) {
      return romanLetters[decimal][0].repeat(factor);
    } else if (factor === 4) {
      return romanLetters[decimal][0] + romanLetters[decimal][1];
    } else if (factor === 5) {
      return romanLetters[decimal][1];
    } else if (factor >= 6 && factor <= 8) {
      return (
        romanLetters[decimal][1] + romanLetters[decimal][0].repeat(factor - 5)
      );
    } else if (factor === 9) {
      return romanLetters[decimal][0] + romanLetters[decimal + 1][0];
    }
    return "";
  };
  const letters = [];
  const strNumber = n.toString();
  let decimalCounter = 0;
  for (let i = strNumber.length - 1; i >= 0; i--) {
    letters.push(getLetter(decimalCounter++, parseInt(strNumber[i])));
  }
  return letters.reverse().join("");
}

module.exports = convertToRoman;
