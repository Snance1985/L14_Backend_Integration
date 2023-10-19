// const car = {
//     make: "VW",
//     model: "Bug",
//     color: "Orange",
//     start: function() {
//         console.log("starting the car")
//     }
// }

// const car2 = {
//     make: "Toyota",
//     model: "Tacoma",
//     color: "Grey",
//     start: function() {
//         console.log("starting the car")
//     }
// }

// class Contact {
//     constructor(first, last, phone) {
//         this.firstName = first;
//         this.lastName = last; 
//         this.phone = phone; 
//     }

//     info() {
//         console.log("My name is " + this.firstName + " " + this.lastName + " and my phone number is " + this.phone + ".");
//     }
// }

// let jed = new Contact("Jed", "Walker", "1234567890");
// jed.info();

// class Vehicle {
//     constructor(clr, numWheels, fuelLevel, numDoors) {
//         this.color = clr;
//         this.numOfWheels = numWheels;
//         this.fuelLvl = fuelLevel;
//         this.doors = numDoors;
//         this.state = "stopped";
//     }

//     go() {
//         this.state = "moving";
//     }

//     stop() {
//         this.state = "stopped";
//     }

//     status() {
//         if (this.state === "moving") {
//             alert("Here we go!");
//         } else {
//             alert("Did you start the Vehicle?");
//         }
//     }

//     message() {
//         console.log("My vehicle is a " + this.color + " " + this.doors + " door SUV with " + this.numOfWheels + " wheels and a fuel level of " + this.fuelLvl + " of a tank.")
//     }
// }

// // initialize a new Vehicle object
// let myCar = new Vehicle("gray", 4, 0.5, 4);

// // call class methods using dot notation
// myCar.go();
// myCar.status();
// myCar.message(); 

//getter
// class Course {
//     constructor(name, timeOfClass, pointsAvailable) {
//         this.name = name;
//         this.timeOfClass = timeOfClass;
//         this.pointsAvailable = pointsAvailable
//     }

//     classTime() {
//         alert("Class will begin " + this.timeOfClass);
//     }

//     changeClassTime(time) {
//         this.timeOfClass = time;
//         alert("Can we change class time to " + this.timeOfClass);
//     }

//     get time() {
//         return "Class will now be " + this.timeOfClass;
//     }
// }

// let aClass = new Course("A Class", "Mon 1:00pm", 200);
// aClass.classTime()
// aClass.changeClassTime("Mon 3:00pm");

// // invoke the getter
// alert(aClass.time);


// //setter
// class Course {
//     constructor(name, timeOfClass, pointsAvailable) {
//         this.name = name;
//         this.timeOfClass = timeOfClass;
//         this.pointsAvailable = pointsAvailable
//     }
//     changeClassTime(time) {
//         this.timeOfClass = time;
//         alert("Class time has been changed to " + this.timeOfClass);
//     }

//     get time() {
//         return this.timeOfClass;
//     }

//     set points(value) {
//         if (value > this.pointsAvailable) {
//             this.pointsAvailable = value;
//             alert("Points available have increased to " + this.pointsAvailable + " points");
//         } else {
//             alert("Points available value can only increase");
//             throw Error("Points available value can only increase");
//         }
//     }
// }

// let aClass = new Course("A Class", "Mon 1:00pm", 200);

// // ERROR: Points available value can only increase
// aClass.points = 150;



class Vehicle {
    constructor(clr, numWheels, fuelLevel, numDoors) {
        this.color = clr;
        this.numOfWheels = numWheels;
        this.fuelLvl = fuelLevel;
        this.doors = numDoors;
        this.state = "stopped";
    }

    go() {
        this.state = "moving";
    }

    stop() {
        this.state = "stopped";
    }

    status() {
        if (this.state === "moving") {
            alert("Here we go!");
        } else {
            alert("Did you start the Vehicle?");
        }
    }

    message() {
        console.log("My vehicle is a " + this.color + " " + this.doors + " door SUV with " + this.numOfWheels + " wheels and a fuel level of " + this.fuelLvl + " of a tank.")
    }
}



class Motorcycle extends Vehicle {
    constructor(color, fuelLvl) {
        super(color, 2, fuelLvl, 0);
    }

    turnHandleBars() {
        alert("Turning the handlebars of my " + this.color + " motorcycle.");
    }
}



let moto = new Motorcycle("red", 0.5);
moto.go()
moto.turnHandleBars();

