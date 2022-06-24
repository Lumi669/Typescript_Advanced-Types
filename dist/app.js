"use strict";
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges : ", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: ", emp.startDate);
    }
}
const e1 = {
    name: "Rose",
    privileges: ["create-server"],
    startDate: new Date(),
};
printEmployeeInformation(e1);
printEmployeeInformation({ name: "Mika", startDate: new Date() });
const aa = 3;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Drive a truck ... ");
    }
    loadCargo(amount) {
        console.log("Loading cargo ... ", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle, x) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(x);
    }
}
useVehicle(v1, 5);
useVehicle(v2, 99);
function moveAnimal(animal) {
    let speed;
    switch (animal.aa) {
        case "bird":
            speed = "flyingSpeed";
            break;
        case "horse":
            speed = "runningSpeed";
            break;
    }
    console.log(`Now animald is ${animal.aa} and its speed is: ${speed} `);
}
const cuteAnimal = { aa: "bird", flyingSpeed: 90 };
moveAnimal(cuteAnimal);
//# sourceMappingURL=app.js.map