//Lesson 4
//Objects
function callcar () {
    var car = {
        brand: "Tesla", 
        model: "Model S",
        price: 50000,
        color: "silver",
        discount: parseFloat(0.1),
        finalprice: function() {
            return (car.price - (car.discount * car.price));
        },
        brandmodonly: function() {
            return (this.brand + " " + this.model);
        }
    }
    console.log(car);
    console.log("The discounted price is " + "$" + car.finalprice());
    console.log("The brand and model of the car is: " + car.brandmodonly());
}

//Arrays
var animals = ["rat", "ox", "tiger", "rabbit"];
let result = animals;
console.log(result);
console.log([animals.length]); //get length

