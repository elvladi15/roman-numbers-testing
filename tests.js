const chai = window.chai;
const expect = chai.expect;

describe("RomanNumbers", () => {
  it("Convert decimal number to roman number.", () => {
    expect(convertToRoman(65)).to.deep.equal("LXV");
    expect(convertToRoman(198)).to.deep.equal("CXCVIII");
    expect(convertToRoman(3999)).to.deep.equal("MMMCMXCIX");
    expect(convertToRoman(724)).to.deep.equal("DCCXXIV");
    expect(convertToRoman(367)).to.deep.equal("CCCLXVII");
  });
});
