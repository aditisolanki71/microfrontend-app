const { faker } = require("@faker-js/faker");

// Example usage
// console.log("cart email", faker.internet.email());
// console.log("cart fullbname", faker.name.fullName());

// const cartText = `<div>You have ${faker?.internet.email()}</div>`;
// document.querySelector("#dev-carts").innerHTML = cartText;

// Example usage
console.log("cart email", faker.internet.email());
console.log("cart fullbname", faker.name.fullName());

const mount = (el) => {
  const cartText = `<div>You have ${faker?.internet.email()}</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-carts");
  if (el) {
    mount(el);
  }
}

export { mount };
