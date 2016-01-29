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
  var sizePrice = 16;
  var toppingPrice = 0;
  var price = 0;
  if (this.pizzaSize === "X-Large") {
    sizePrice += 6;
  } else if (this.pizzaSize === "Large") {
    sizePrice += 3;
  } else if (this.pizzaSize === "Small") {
    sizePrice -= 3;
  }

  if (this.topping1 === "Pepperoni " || this.topping1 === "Bacon " || this.topping1 === "Chicken " || this.topping1 === "Ham ") {
    toppingPrice += 2;
  } else if (this.topping1 === "Pineapple " || this.topping1 === "Onions " || this.topping1 === "Mushrooms " || this.topping1 === "Olives ") {
    toppingPrice +=1;
  }
  if (this.topping2 === "Pepperoni " || this.topping2 === "Bacon " || this.topping2 === "Chicken " || this.topping2 === "Ham ") {
    toppingPrice += 2;
  } else if (this.topping2 === "Pineapple " || this.topping2 === "Onions " || this.topping2 === "Mushrooms " || this.topping2 === "Olives ") {
    toppingPrice +=1;
  }
  if (this.topping3 === "Pepperoni " || this.topping2 === "Bacon " || this.topping2 === "Chicken " || this.topping2 === "Ham ") {
    toppingPrice += 2;
  } else if (this.topping3 === "Pineapple " || this.topping3 === "Onions " || this.topping3 === "Mushrooms " || this.topping3 === "Olives ") {
    toppingPrice +=1;
  }
  if (this.topping4 === "Pepperoni " || this.topping4 === "Bacon " || this.topping4 === "Chicken " || this.topping4 === "Ham ") {
    toppingPrice += 2;
  } else if (this.topping4 === "Pineapple " || this.topping4 === "Onions " || this.topping4 === "Mushrooms " || this.topping4 === "Olives ") {
    toppingPrice +=1;
  }
  if (this.topping5 === "Pepperoni " || this.topping5 === "Bacon " || this.topping5 === "Chicken " || this.topping5 === "Ham ") {
    toppingPrice += 2;
  } else if (this.topping5 === "Pineapple " || this.topping5 === "Onions " || this.topping5 === "Mushrooms " || this.topping5 === "Olives ") {
    toppingPrice +=1;
  }

  // price = price * Pizza.quantity;
  price = sizePrice + toppingPrice;
  return price;
}
$(document).ready(function() {
  $("p#toggle").click(function() {
    $("#toggleShowing").toggle();
  });
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

  $("#orderInfo").show();
  $("#displayPizzaSize").text(pizzaSize);
  $("#displayToppings1").text(pizzaTopping1);
  $("#displayToppings2").text(pizzaTopping2);
  $("#displayToppings3").text(pizzaTopping3);
  $("#displayToppings4").text(pizzaTopping4);
  $("#displayToppings5").text(pizzaTopping5);
  $("#displayPrice").text(totalPrice);

  });
});
