function getFibonacciSequence(limit) {
    var sequence = [0, 1];
    for (var i = 2; i < limit; i++) {
      var num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }
    return sequence;
  }
  
  console.log(getFibonacciSequence(10));
  