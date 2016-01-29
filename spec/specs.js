describe('Pizza', function() {
  it("creates an objects that stores the properties of the constructor prototype", function() {
    var testPizza = new Pizza("Pepperoni", "Medium");
    expect(testPizza.toppings).to.equal("Pepperoni");
    expect(testPizza.pizzaSize).to.equal("Medium");
  });
  it("will calculate the cost of the pizza based on toppings and size", function() {
    var testPizza = new Pizza("Pepperoni", "Medium");
    expect(testPizza.price()).to.equal(15);
  })
});
