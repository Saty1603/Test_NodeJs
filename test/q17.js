function isPangram(sentence) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    sentence = sentence.toLowerCase();
    for (var i = 0; i < alphabet.length; i++) {
      if (!sentence.includes(alphabet[i])) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPangram('The quick brown fox jumps over the lazy dog'));
  