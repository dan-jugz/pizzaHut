$(document).ready(function() {
    $("#order-details ,.card").hide();
    $(".delivery").hide();



$("form#new-contact").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input#sizes").val();
    var pizzaCrust = $("input#crust").val();
    var pizzaTopping = $("input#topping").val();
    var pizza = new pizza(size, crust,topping);

    function pizza(size,crust,topping){
      this.pizzaSize=size;
      this.pizzaCrust=crust;
      this.pizzaTopping=topping;
      this.pizzaPrice=0;
  };
  

    $("submit").each(function() {
      var orderName = $(this).find("input#name").val();
      var orderNumber = $(this).find("input#contact").val();
      var location = $(this).find("input#location").val();
      var pizzaOrder = new pizza(size, crust,topping)
      pizzaOrder.pizzaCost.push(deliver)
    });

    function pizzaDeliver(orderName,orderNumber,location){
    
      this.orderName= name;
      this.orderNumber= number;
      this.location= location;
  };
  
  

  $("ul#order").append("<li><span class='order'>" + new.orderName() + "</span></li>");


  
function pizza(size,crust,topping){
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaTopping=topping;
    this.pizzaPrice=0;
};

  
    var pizzaSize = ["big", "medium", "small"];
    var pizzaCrust = ["crispy", "stuffed", "gluten-free"];
    var pizzaTopping = ["cheese", "brocoli", "mushroom","pineapple", "black-olives","ginger-and-kale"];
    var grandTotal = [];


pizza.prototype.pizzaCost = function(){
    /**pizza size to pizza sizes */
  if (this.pizzaSize === pizzaSize[0]) {
    pizzaPrice = +900;
  }
  else if (this.pizzaSize === pizzaSize[1]) {
    pizzaPrice = +700;
  }
  else if (this.pizzaSize === pizzaSize[2]) {
    pizzaPrice = +500;
  }
  /*pizza crust to pizza size to pizza price */
  if (this.pizzaCrust === pizzaCrust[0]) {
    pizzaPrice = +150;
  }
  else if (this.pizzaCrust === pizzaCrust[1]) {
    pizzaPrice = +100;
  }
  else if (this.pizzaCrust === pizzaCrust[2]) {
    pizzaPrice = +50;
  }
  /**pizza size to pizza toppings */
  if (this.pizzaTopping === pizzaSize[0]) {
    pizzaPrice = +150;
  }
  else if (this.pizzaTopping === pizzaSize[1]) {
    pizzaPrice = +100;
  }
  else if (this.pizzaTopping === pizzaSize[2]) {
    pizzaPrice = +50;
  };
  return this.pizzaPrice;
};

Order.prototype.finalCost = function() {
    var totalPrice = [];
    for (var arrayElement = 0; arrayElement < grandTotal.length; arrayElement++) {
      totalPrice += grandTotal[arrayElement];
    }
    return totalPrice;
  };


$(document).ready(function(){
  $('#submit-pizza').click(function(){
     $('.order,.deliver').slideToggle(1000);
  });
  $("#pizzaDeliver").click(function() {
      $(".order-details").show(1000);
    });

function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }

  function pizzaDeliver(orderName,orderNumber,location){
    alert(orderName + "'s pizza will be delivered to " + location + "in 30 minutes. we will contact " + orderNumber)
};

let thanks = function(){
  alert('thank you for your order.')
}
 