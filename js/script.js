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

//Array Iterations. Special commands to manipulate arrays
var fruits;
fruits = ["Banana", "Orange", "Apple", "Mango"];

function loopArray(value) { //function to do console.log for each value in the array above
    console.log(value + "\n");
}

fruits.forEach(loopArray); //do function loopArray for each fruit. forEach(default=function)

let num1 = [45, 4, 9, 16, 25];
let num2 = num1.map(function multiplyTwo(value) { //map copies all array num 1
    return value * 2;   // mutiply arrary num1 by 2 and save as num2[]
});

console.log(num2);

var over18 = num1.filter(myFunction);  // filter out specific values with conditions

function myFunction(value) {
    return value > 18;
}

console.log(over18);

var firstover18 = num1.find(myFunction);  // find first value that matches condition. Only returns one value.

console.log(firstover18);

var allover18 = num1.every(myFunction); // gives boolean value true if all values matches condition.
var someover18 = num1.some(myFunction); // gives boolean value true if even 1 value matches condition.

console.log(allover18);
console.log(someover18);

console.log(Array.isArray(fruits)); // checks if fruits is an array. Boolean
console.log(fruits instanceof Array); // returns true if array

//Practical EX
let users = ["John", "Eric", "David", "Clare", "Zoe", "Tom"];

console.log(users[2]); // get David
users[4] = "Mary"; // replace zoe with mary

console.log(users[4]); // replaced and print Mary

users.forEach(function loopArray(value) {
    console.log(value + "\n");
});

let user = {
    firstname: "John",
    lastname: "Doe",
    age: 28,
    sex: "M",
    email: "john.doe@email.com",
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}
//log all user details in a sentence
console.log("Hi, my name is " + user.fullName() + ". I am " + user.age + " years old, and my sex is " + user.sex + " and my email is " + user.email + ".");

//Lesson 4-2 

console.log(fruits.toString());  //combine to one string
console.log(fruits.join("*")); //add * in between and join

fruits.push("Lemon"); // add "Lemon" to back of array
console.log(fruits);

fruits[fruits.length] = "Durian"; 

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b -a});  //this is for sorting numbers. For alphabets normal sort can. It uses first 2 numbers for sorting. If A - B. A is smaller, this will arrange smaller to larger. If A larger than B, this will arrange larger to smaller.
console.log(points);

console.log(points.shift()); // Takes out first value
console.log(points.pop()); // Takes out last value
console.log(points); // As you can see first and last value is removed from points[]

console.log(points.sort()); // Normal sort can only sort by first digit. All 1s will go in front and 9 back regardless of value.
