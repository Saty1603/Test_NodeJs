function findLargestNumber(numbers) {
    var largest = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  
  console.log(findLargestNumber([4, 2, 9, 5])); 
  