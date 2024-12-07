const { faker } = require("@faker-js/faker");

// Example usage
console.log("email", faker.internet.email());
console.log("fullbname", faker.name.fullName());

let products = "";
for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
console.log("products", products);
console.log(products);
document.querySelector("#dev-products").innerHTML = products;
