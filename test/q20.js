function removeDuplicates(text) {
    var uniqueChars = [];
    for (var i = 0; i < text.length; i++) {
      if (!uniqueChars.includes(text[i])) {
        uniqueChars.push(text[i]);
      }
    }
    return uniqueChars.join('');
  }
  
  console.log(removeDuplicates('hello world'));
  