function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.price = function() {
  var price = 13;
  if (Pizza.toppings === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.toppings === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.pizzaSize === "Large") {
    price += 3;
  } else if (Pizza.pizzaSize === "Small") {
    price -= 3;
  }
  return price;
}
