var size = new Array['big','medium','small'];

function fn1(){
    var select = document.getElementById("bigg");
    alert(select.options[select.selectedIndex].value)};

function pizzaOrder(orderName,orderNumber,location,size){
    this.ordername = orderName;
    this.orderNumber = orderNumber;
    this.location = location;
    this.size = size;
}

