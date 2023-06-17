function countWords(sentence) {
    var words = sentence.split(' ');
    var count = {};
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (count[word] === undefined) {
        count[word] = 1;
      } else {
        count[word]++;
      }
    }
    return count;
  }
  
  console.log(countWords("The quick brown fox jumps over the lazy dog"));
  