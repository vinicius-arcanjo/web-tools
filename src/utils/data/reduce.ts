export const reduce = `
const childrenAge = [2, 0, 5, 8, 12, 17, 13, 7, 10];

const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
  ];

const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice,
  0
);

console.log(totalValue);

const totalProducts = shopCart.reduce(
  (totalProduct, product) => totalProduct + product.quantity,
  0
);

console.log(totalProducts);

const children = childrenAge.reduce((list, age) => {
  list.push({
    age,
    birthYear: 2019 - age
  });
  return [...list];
}, []);

console.log(children);
`
