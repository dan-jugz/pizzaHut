function fn1(){
    var select = document.getElementById("bigg");
    alert(select.options[select.selectedIndex].value)
};

size = new Array['big','medium','small'];
let orderName=document.getElementById("name").value;
let orderNumber=document.getElementById("number").value;
let location=document.getElementById("location").value;



function pizzaDeliver(orderName,orderNumber,location){
    alert(orderName + "'s pizza will be delivered to " + location + "in 30 minutes. we will contact " + orderNumber)
};



pizzaOrder.prototype.giveMePizza = function(size, crust, topping){
    if(size=='big'){price = 900}
    else if(size=='medium'){price = 700}
    else(size=='small'){price = 500}

    return price + addCrust + addTopping
}

var crust = function addCrust(price){
    return price*0.15
};

var topping = function addTopping(price){
    return price*0.2
};

var amount = function Price(price, crust, topping){
    return price+crust+topping;
};

$(document).ready(function(){
    $('button').click(function(){
       $('div').slideToggle(1000);
    });
});
//delivery things
$(document).ready(function () {
    $("#deliver").click(function () {
        alert("Delivery charges: $ 10 ")
        prompt("Enter you name ")
        prompt("Enter your location")
        prompt("Enter your address")
        alert("Your order will be deliver to your location")
 
    });