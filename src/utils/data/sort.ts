export const sort = `
  const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
  ];

  const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
  ];

  const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);
  console.log(orderByTotalProducts);

  const orderByPassengerName = passengers.sort((pa, pb) => {
    if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1;
    if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1;
    return 0;
  });

  console.log(orderByPassengerName);
`
