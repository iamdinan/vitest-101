export function longestString(str1, str2) {
  if (str2.trim().length > str1.trim().length) return str2;

  return str1;
}
