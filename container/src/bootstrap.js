//products is connected with webpack config "products"
// import "products/ProductsIndex";

import { mount as productsMount } from "products/ProductsIndex";
// import "cart/CartShowIndex";
import { mount as cartsMount } from "cart/CartShowIndex";

console.log("hello from container app -APP1 is running");
productsMount(document.querySelector("#my-products"));
cartsMount(document.querySelector("#my-carts"));
