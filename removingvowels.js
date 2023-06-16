function disemvowel(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}