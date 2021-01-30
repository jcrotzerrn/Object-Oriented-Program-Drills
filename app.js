//create 5 object literals, call each with sayHello function
let person1 = {
    name: 'Cameron',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}.`);
    }
};

let person2 = {
    name: 'Adam',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}.`);
    }
};

let person3 = {
    name: 'Kristyn',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}.`);
    }
};

let person4 = {
    name: "Abigail",
    sayHello: function() {
        console.log(`Hello my name is ${this.name}.`);
    }
};

let person5 = {
    name: 'Chase',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}.`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//Create a constructor function with name, city and age

function Friend(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
    
Friend.prototype.sayHello = function() {
    console.log(
        `Hey! My name is ${this.name} I am ${this.age} years old and I live in ${this.city}.`
    )
};

friend1 = new Friend('Cameron', '22', 'Lebanon');
friend2 = new Friend('Adam', '56', 'Spring Hill');
friend3 = new Friend('Kristyn', '11', 'Spring Hill');
friend4 = new Friend('Abigail', '9', 'Spring Hill');
friend5 = new Friend('Chase', '25', 'Bellevue');
friend1.sayHello();
friend2.sayHello();
friend3.sayHello();
friend4.sayHello();
friend5.sayHello();

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
    }
}

person1 = new Person('Cameron', '22', 'Lebanon');
person2 = new Person('Adam', '56', 'Spring Hill');
person3 = new Person('Kristyn', '11', 'Spring Hill');
person4 = new Person('Abigail', '9', 'Spring Hill');
person5 = new Person('Chase', '25', 'Spring Hill');
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//Create a class vehicle, not every vehicle is a truck, nor a sedan, motorcycle or coupe

class Vehicle {
    constructor(type, manufacturer, numWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
    }

    aboutVehicle() {
        console.log(`The ${this.manufacturer} ${this.type} has ${this.numWheels} wheels`);
    }


    logTruckBed() {
        return this.hasTruckBed ? 'a truck bed' : 'no truck bed';
     }
}
//Trucks are vehicles, they have wheels. So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.   
class Truck extends Vehicle {
    constructor(type, manufacturer, numWheels, doors) {
        super(type, manufacturer, numWheels);
        this.doors = doors;
        this.hasTruckBed = true;
    }
    aboutVehicle() {
        console.log(`The ${this.manufacturer} ${this.type} has ${this.numWheels} wheels, ${this.doors} doors, and ${this.logTruckBed()}.`);
    }
}


//Now sedans are vehicles also, but they don’t have a truck bed (We’re ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels. 
class Sedan extends Vehicle {
    constructor(type, manufacturer, size, mpg) {
        super(type, manufacturer);
        this.numWheels = 4;
        this.doors = 4;
        this.hasTruckBed = false;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`The ${this.size} ${this.manufacturer} ${this.type} gets 
        ${this.mpg} miles per gallon, has ${this.numWheels} wheels, 
        ${this.doors} doors, and ${this.logTruckBed()}`);
    }
}
//Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
class Motorcycles extends Vehicle {
    constructor(type, manufacturer) {
        super(type, manufacturer) 
        this.numWheels = 2;
        this.doors = false;
        this.goReverse = false;
        this.handlebars = true;  
        }
        aboutVehicle() {
            console.log(`The ${this.manufacturer} ${this.type} has ${this.numWheels} wheels, 
            ${this.doors ? 'doors' : 'no doors'}, and ${this.handlebars ? 
                'has handle bars' : 'has a steering wheel'}`);
        }
        }
        
    let v1 = new Vehicle('Bronco', 'Ford', '4');
    let t1 = new Truck('Ram', 'Dodge','4', '4');
    let s1 = new Sedan('Altima', 'Nissan', 'Medium', '32');
    let m1 = new Motorcycles('Davidson', 'Harley');
    
    console.log(v1);
    console.log(t1);
    console.log(s1);
    console.log(m1);

    v1.aboutVehicle();
    t1.aboutVehicle();
    s1.aboutVehicle();
    m1.aboutVehicle();
