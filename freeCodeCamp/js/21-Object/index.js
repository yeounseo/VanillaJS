// JS Nuggets : Objects

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"]);

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"]);

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the
        // object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}

showProps(myCar, "myCar");
console.log(showProps(myCar, "myCar"));

// Creation : object initializer
var myHonda = {
    color: "red",
    wheels: 4,
    engine: {
        cyliners: 4,
        size: 2.2
    }
};

// Creation : constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(anothercar.model);
mycar.color = "black";
console.log(mycar.color);

// Creation : Object.create
var Animal = {
    type: "Invertebrates",
    displayType: function () {
        console.log(this.type);
    }
}

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

// Objects : Part 2 

//Using Objects for Lookups

var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W"
    // ...
};
console.log(alpha[2]);

//Remove Object Properties

let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes);

//  Testing Objects for Properties

console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

// Accessing and Modifying Nested Objects

var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);


// Generate an Array of All Object Keys

console.log(Object.keys(ourStorage));