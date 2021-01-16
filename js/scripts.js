function Pizza(pizzasize,number,crust,toppings,address) {
    this.pizzasize = pizzasize
    this.number = number
    this.crust = crust
    this.toppings = toppings
    this.address = address
}
function PizzaSize (choice,price) {
    this.choice = choice
    this.price = price
}
function Number () {
    this.number = number
    
}    

function Crust(type,price) {
    this.type = type
    this.price = price
}        
function Toppings (flavour,price) {
    this.flavour = flavour
    this.price = price
 }       
function Address(county,town) {
    this.county = county
    this.town = town   
}  
//create values
//pizza
var mega = new PizzaSize("mega",1200);
var large = new PizzaSize("large",1000);
var medium = new PizzaSize("medium",800);
var small = new PizzaSize("small",400);



//crust
var crispy = new Crust("mega",100);
var stuffed = new Crust("mega",120);
var gluttenfree = new Crust("mega",150);

//toppings
var pepperoni = new Toppings("pepperoni",250);
var hawaiian = new Toppings("hawaiian",210);
var bbqmeat = new Toppings("bbqmeat",200);
var garlic = new Toppings("garlic",170);
var cheese = new Toppings("cheese",150);
var chilli = new Toppings("chilli",10);

var nairobi = new Address("nairobi,nairobi")
var kericho = new Address("kericho,kericho")
var kisumu = new Address("kisumu,kisumu")
var kisii = new Address ("kisii,kisii")
var thika = new Address("thika,thika")
var nakuru = new Address("nakuru,nakuru")
var bomet = new Address("bomet,bomet")

$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        event.preventDefault();
        //capture values from form
        var inputtedSize = $("select#size").val();
        var inputtedNumber = $("input#number").val();
        var inputtedCrust = $("select#crust").val();
        var inputtedToppings = $("select#toppings").val();
        var inputtedToppings = $("select#toppings").val();  
        var inputtedCounty = $("select#county").val();
        var inputtedTown = $("select#town").val();
        
        //output
        var order="<tr>"+
        "<td>" + inputtedSize +"</td>"+
        "<td>" + inputtedNumber +"</td>"+
        "<td>" + inputtedCrust +"</td>"+
        "<td>" + inputtedToppings+"</td>"+
        "<td>" + inputtedCounty+"</td>"+
        "<td>" + inputtedTown+"</td>"+
        
        "</tr>";
    
        $("#orders").append(order);
        
        var total = myFunction(){
            
        }

    });
});


function response() {
    alert("your order will be sent to your selected location")
    alert("click the checkout button to exit")

};
function exit() {
    alert("click the checkout button to exit")
};


