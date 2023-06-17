function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
  }
  
  console.log(capitalizeWords("hello world"));
  