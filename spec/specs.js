describe('Pizza', function() {
  it("creates an objects that stores the properties of the constructor prototype", function() {
    var testPizza = new Pizza("Pepperoni", "Pepperoni", "Pepperoni", "Pepperoni", "Pepperoni", "Medium", 1);
    expect(testPizza.topping1).to.equal("Pepperoni");
    expect(testPizza.topping2).to.equal("Pepperoni");
    expect(testPizza.topping3).to.equal("Pepperoni");
    expect(testPizza.topping4).to.equal("Pepperoni");
    expect(testPizza.topping5).to.equal("Pepperoni");
    expect(testPizza.pizzaSize).to.equal("Medium");
    expect(testPizza.quantity).to.equal(1);
  });
  it("will calculate the cost of the pizza based on toppings and size with just a 'Medium' perameter", function() {
    var testPizza = new Pizza("Medium");
    expect(testPizza.price()).to.equal(16);
  });
  it("will calculate the cost of the pizza based on toppings and size with 5 Pepperoni and Medium", function() {
    var testPizza = new Pizza("Pepperoni ", "Pepperoni ","Pepperoni ","Pepperoni ","Pepperoni ", "Medium", 1);
    expect(testPizza.price()).to.equal(26);
  });
  it("will calculate the cost of the pizza based on toppings and size with 1 Olives 4 Pepperoni and X-Large size", function() {
    var testPizza = new Pizza("Olives ", "Pepperoni ","Pepperoni ","Pepperoni ","Pepperoni ", "X-Large", 1);
    expect(testPizza.price()).to.equal(31);
  });
});
