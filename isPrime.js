module.exports = function isPrime(num) {
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
