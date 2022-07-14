export const filter = `
  const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10];

  const mailList = [
    "robson@email.com",
    "fulano@gmail.com",
    "cleiton@email.com",
    "diego@email.com",
    "eu@adonis.com",
    "aloha@hawaii.com",
    "outro@emailqualquer.com"
  ];

  const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
  ];

  const childrenFiltered = childrenAge.filter(element => element >= 2 && element <= 11);
  console.log(childrenFiltered);

  const filteredMails = mailList.filter(mail => mail.includes("@email.com"));
  console.log(filteredMails);

  const bellow100 = shopCart
  .filter(product => product.unitPrice <= 100)
  .reduce((lastProductUnitPrice, currentProduct) => {
    if (lastProductUnitPrice > currentProduct.unitPrice)
      return lastProductUnitPrice;

    return currentProduct.unitPrice;
  }, 0);

  console.log(bellow100);
`
