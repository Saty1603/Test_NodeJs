function sumSquares(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2;
    }
    return sum;
  }
  
  console.log(sumSquares([1, 2, 3, 4]));
  