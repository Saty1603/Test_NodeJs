function getEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
  