const { faker } = require("@faker-js/faker");

// Example usage
console.log("email product", faker.internet.email());
console.log("fullbname product ", faker.name.fullName());

// let products = "";
// for (let i = 0; i < 3; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }
// console.log("products", products);
// console.log(products);
// document.querySelector("#dev-products").innerHTML = products;

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log("products", products);
  el.innerHTML = products;
  //u can use something as below in case of react app render
  // ReactDOM.render(<App />, el)
};

//context/situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element with an id of 'dev-product'
//we want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  //Assuming our container does not have an element
  //with id 'dev-products'
  if (el) {
    //we are probably running in isolation
    //not run app with container
    mount(el);
  }
}
//context/situation #2
//we are running this file in developement or production through the container app
//no gaurantee that an element with an id of 'dev-products'
//we do not want try to immediately render the app

export { mount };
