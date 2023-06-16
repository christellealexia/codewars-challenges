function duplicateCount(text){
   const charCount = {};
  let duplicates = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (/[a-z0-9]/i.test(char)) {
      if (charCount[char]) {
        if (charCount[char] === 1) {
          duplicates++;
        }
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  return duplicates;
}

