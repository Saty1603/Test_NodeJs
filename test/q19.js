function getTotalPrice(products) {
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
      totalPrice += products[i].price;
    }
    return totalPrice;
  }
  
  const products = [
    { name: 'Apple', price: 0.5 },
    { name: 'Orange', price: 0.8 },
    { name: 'Banana', price: 0.3 }
  ];
  
  console.log(getTotalPrice(products));
  