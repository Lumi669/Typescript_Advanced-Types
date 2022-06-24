//define an Admin type which is an
//object type, this is not creating
//an object here, we are defining a type.
//here can be done with interface as well
type Admin = {
  name: string;
  privileges: string[];
};

//define an Employee type
type Employee = {
  name: string;
  startDate: Date;
};

type UnkownEmployee = Employee | Admin;

//Line21 and Line22 shows errors because emp might not
//has e.g privileges property if it happens to be Employee type
// other than Admin type
// function printEmployeeInformation(emp: UnkownEmployee) {
//   console.log("Name: ", emp.name);
//   console.log("Privileges : ", emp.privileges);
//   console.log("startDate: ", emp.startDate);
// }

//Below Line31 and Line34 create type guards for object
// using 'in'
function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges : ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate: ", emp.startDate);
  }
}

//create a new type based on the above
//two types
type ElevatedEmployee = Admin & Employee;

//create an object with ElevatedEmployee type
const e1: ElevatedEmployee = {
  name: "Rose",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Mika", startDate: new Date() });

//Below is demonstrating an intersection type created from
// 2 union types

//create an union type
type Combinable = string | number;

//create an union type
type Numeric = boolean | number;

//create an intersection type from two union types
//The Universal type now is number type,
// because it takes the common part of the two union types.
// Line46 and Line47 both shows error!!!
type Universal = Combinable & Numeric;

const aa: Universal = 3;
// const bb: Universal = false;
// const cc: Universal = "3";

// shows error because Combinable is a string or a number,
//not know for sure what it is, shoulb be chekced, see below
// function add(a: Combinable, b: Combinable){
//   return a + b;
// }

//Line56 is a type guard, using typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//Below demonstrating type guards for class type checking
//use instanceof
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Drive a truck ... ");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ... ", amount);
  }
}

//create a union type
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

//create a function which can do everything Vehicle type can do
function useVehicle(vehicle: Vehicle, x: number) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(x);
  }
}

useVehicle(v1, 5);
useVehicle(v2, 99);

//below demonstrate Discriminated union type

// create two interface types, Bird and Horse
interface Bird {
  aa: "bird"; //create a literal type
  flyingSpeed: number;
}

interface Horse {
  aa: "horse"; //create a literal type
  runningSpeed: number;
}

//create an union type
type Animal = Bird | Horse;

// a function checking interface type now using
//discriminated union type
//Note: now use switch statement
function moveAnimal(animal: Animal) {
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

const cuteAnimal: Animal = { aa: "bird", flyingSpeed: 90 };
moveAnimal(cuteAnimal);
