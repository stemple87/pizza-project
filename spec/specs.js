describe('Pizza', function() {
  it("creates an objects that stores the properties of the constructor prototype", function() {
    var testPizza = new Pizza("Pepperoni", "Medium");
    expect(testPizza.toppings).to.equal("Pepperoni");
    expect(testPizza.pizzaSize).to.equal("Medium");
  });
});

// describe ('Ticket', function() {
//   it("creates a new ticket order with the given properties", function() {
//     var testTicket = new Ticket("Star Wars", 7, 24);
//     expect(testTicket.movieName).to.equal("Star Wars");
//     expect(testTicket.time).to.equal(7);
//     expect(testTicket.age).to.equal(24);
//   });
//   it("adds the price method to the ticket", function() {
//     var testTicket = new Ticket("Star Wars", 7, 24);
//     expect(testTicket.price()).to.equal(9);
//   });
// });
