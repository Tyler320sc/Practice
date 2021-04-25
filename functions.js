const fToC = ftemp => (ftemp - 32) / 1.8;
const cToF = ctemp => (ctemp * 1.8) + 32;

const convertTemperature = (temp, conv) => {
  if (conv === 'FtoC') {
	return fToC(temp);
  } else {
	return cToF(temp);
  }
};

const isEven = x => x % 2 === 0;
const isOdd = (x) => !isEven(x);

module.exports = {
  convertTemperature,
  isEven,
  isOdd
};