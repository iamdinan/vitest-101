export function longestString(str1, str2) {
  if (str2.trim().length > str1.trim().length) return str2;

  return str1;
}

export function isPrime(num) {
  if (typeof num !== "number") throw new Error("Input must be a number");

  if (!Number.isInteger(num)) return false;
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
