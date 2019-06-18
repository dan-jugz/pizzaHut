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
  
  pizzaDeliver.name.location

    $("ul#order").append("<li><span class='order'>" + new.orderNumber() + "</span></li>");


  
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


function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }

  function pizzaDeliver(orderName,orderNumber,location){
    alert(orderName + "'s pizza will be delivered to " + location + "in 30 minutes. we will contact " + orderNumber)
};

  /*delivery things


var amount = function Price(price, crust, topping){
    return price+crust+topping;
};

$(document).ready(function(){
    $('button').click(function(){
       $('div').slideToggle(1000);
    });
    $("#submit-pizza").click(function() {
        $("#deliver").toggle();
      });
    
      $("#checkout-btn").click(function() {
        $("#order-details").toggle();
      });
    $('button').click(function(){
        $('.order-details').show(1000)
    })
});
$("#submit-pizza").click(function() {
    $(".deliver").toggle();
  });

  $("#checkout-btn").click(function() {
    $("#order-details").toggle();
  });



$(document).ready(function () {
    $("#deliver").click(function () {
        alert("Delivery charges: 100 ")
        prompt("Enter you name ")
        prompt("Enter your location")
        prompt("Enter your address")
        alert("Your order will be deliver to your location")
 
    })});

    function fn1(){
    var select = document.getElementById("bigg");
    alert(select.options[select.selectedIndex].value)
};

function pizzaDeliver(orderName,orderNumber,location){
    alert(orderName + "'s pizza will be delivered to " + location + "in 30 minutes. we will contact " + orderNumber)
};


pizzaOrder.prototype.giveMePizza = function(size, crust, topping){
    if(size=='big'){price = 900}
    else if(size=='medium'){price = 700}
    else(size=='small');{price = 500}

    return price + crust + topping
}
var crust = function addCrust(price){
    return price*0.15
};


var topping = function addTopping(price){
    return price*0.2
};*/