const storeSupplies = [
    Phones = [
      `Samsung`, '$500.00',
      `Infinix`, `$1,000.00`
    ],
    Shoes = [
      `Adidas`, `$100`,
      `Nike`, `$200`,
      `Puma`, `$50`,
    ]
  ]
  let catInput = 1
  console.log(`Welcome to CEO Enterprises
  For phones press 1
  For footwear press 2`)
  if (catInput == 1){
    for (let i = 0; i <= storeSupplies.length - 2; i++){
      var p = 1
      for (let j = 0; j <= storeSupplies[i].length - 1; j+=2){
        console.log(`${storeSupplies[i][j]}, ${storeSupplies[i][p]}`);
        p+=2
      }
    }
  }
  let q = 1;
  if (catInput == 2){
    for (let i = 0; i <= storeSupplies[1].length - 1; i+=2) {
      console.log(`${storeSupplies[1][i]}: ${storeSupplies[1][q]}`)
    }
    let o = 0;
    for (i in storeSupplies[i]){
        console.log(`For ${storeSupplies[1][o]} press ${i}`);
        o += 2
    }
  }