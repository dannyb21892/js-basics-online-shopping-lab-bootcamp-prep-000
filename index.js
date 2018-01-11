var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var output = "In your cart, you have"
    for (i = 0; i < cart.length; i++) {
      if (i > 0 && i === cart.length - 1) {
        output = output + " and"
      }
      var item = Object.getOwnPropertyNames(cart[i])
      output = output + ` ${item} at $${cart[i][item]}`;
      if (cart.length >= 3 && i < cart.length - 1) {
        output = output + ",";
      }
    }
    output = output + ".";
  }
}

function total() {
  var price = 0;
  for (i = 0; i < cart.length; i++) {
    price = price + cart[i][Object.getOwnPropertyNames(cart[i])];
  }
  return price
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

console.log(true*"yes" + false*"no")