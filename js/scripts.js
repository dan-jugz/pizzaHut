function fn1(){
    var select = document.getElementById("bigg");
    alert(select.options[select.selectedIndex].value)
};



function pizzaOrder(orderName,orderNumber,location,size){
    this.ordername = orderName;
    this.orderNumber = orderNumber;
    this.location = location;
    this.size = size[];
};
size = new Array['big','medium','small'];
var orderName=document.getElementById("name").value;
var orderNumber=document.getElementById("number").value;
var location=document.getElementById("location").value;


pizzaOrder.prototype.giveMePizza = function(size, crust, topping){
    if(size=='big'){price = 900}
    else if(size=='medium'){price = 700}
    else(size=='small'){price = 500}

    return price
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
