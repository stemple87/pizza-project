function Pizza(topping1, topping2, topping3, topping4, topping5, pizzaSize, quantity) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.topping4 = topping4;
  this.topping5 = topping5;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
}

Pizza.prototype.price = function() {
  var price = 13;
  if (Pizza.topping1 === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.topping1 === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.topping2 === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.topping2 === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.topping3 === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.topping3 === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.topping4 === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.topping4 === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.topping5 === "Pepperoni" || "Bacon" || "Chicken" || "Ham") {
    price += 2;
  } else if (Pizza.topping5 === "Pineapple" || "Onions" || "Mushrooms" || "Olives"){
    price +=1;
  }
  if (Pizza.pizzaSize === "X-Large") {
    price += 6;
  } else if (Pizza.pizzaSize === "Large") {
    price += 3;
  } else if (Pizza.pizzaSize === "Small"){
    price -= 3;
  }
  // price = price * Pizza.quantity;
  return price;
}
$(document).ready(function() {
  $("form#pizzaOptions").submit(function(event) {
  event.preventDefault();

  var pizzaSize = $("select#pizzaSize").val();
  var pizzaTopping1 = $("select#pizzaTopping1").val();
  var pizzaTopping2 = $("select#pizzaTopping2").val();
  var pizzaTopping3 = $("select#pizzaTopping3").val();
  var pizzaTopping4 = $("select#pizzaTopping4").val();
  var pizzaTopping5 = $("select#pizzaTopping5").val();
  var quantity = $("form#quantity").val();
  quantity = parseInt(quantity);


  var newPizza = new Pizza(pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4, pizzaTopping5, pizzaSize, quantity);
  var totalPrice = newPizza.price();
  // totalPrice = totalPrice * quantity; <-- keeps returning NaN

  if (pizzaSize === "") {
    return alert("Please select a size");
    $(".show-ticket").hide();
  }


  $("#OrderInfo").show();
  $("#displayPizzaSize").text(pizzaSize);
  $("#displayToppings1").text(pizzaTopping1);
  $("#displayToppings2").text(pizzaTopping2);
  $("#displayToppings3").text(pizzaTopping3);
  $("#displayToppings4").text(pizzaTopping4);
  $("#displayToppings5").text(pizzaTopping5);
  $("#displayPrice").text(totalPrice);

  });
});
