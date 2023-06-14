//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);
console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add from './shoppingCart.js';
add('sugar', 3);
