const { faker } = require("@faker-js/faker");

// Example usage
console.log("cart email", faker.internet.email());
console.log("cart fullbname", faker.name.fullName());

const cartText = `<div>You have ${faker?.internet.email()}</div>`;
document.querySelector("#dev-carts").innerHTML = cartText;
