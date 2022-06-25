// //define an Admin type which is an
// //object type, this is not creating
// //an object here, we are defining a type.
// //here can be done with interface as well
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// //define an Employee type
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type UnkownEmployee = Employee | Admin;

// //Line21 and Line22 shows errors because emp might not
// //has e.g privileges property if it happens to be Employee type
// // other than Admin type
// // function printEmployeeInformation(emp: UnkownEmployee) {
// //   console.log("Name: ", emp.name);
// //   console.log("Privileges : ", emp.privileges);
// //   console.log("startDate: ", emp.startDate);
// // }

// //Below Line31 and Line34 create type guards for object
// // using 'in'
// function printEmployeeInformation(emp: UnkownEmployee) {
//   console.log("Name: ", emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges : ", emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate: ", emp.startDate);
//   }
// }

// //create a new type based on the above
// //two types
// type ElevatedEmployee = Admin & Employee;

// //create an object with ElevatedEmployee type
// const e1: ElevatedEmployee = {
//   name: "Rose",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Mika", startDate: new Date() });

// //Below is demonstrating an intersection type created from
// // 2 union types

// //create an union type
// type Combinable = string | number;

// //create an union type
// type Numeric = boolean | number;

// //create an intersection
// type Universal = Combinable & Numeric;

// //create a function overload with only one parameter
// //then 1.Use the parameter?: type syntax to make another parameter optional
// // in all other function overloads
// //2.Use the expression typeof(parameter) !== 'undefined'
// //to check if the parameter has been initialized.
// // function add(n: number): number;

// //create several function overloads bellow
// function add(a: number, b: number): number;
// function add(a: number, b: string): string;
// function add(a: string, b: number): string;
// function add(a: string, b: string): string;

// // create a type guard, using typeof
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const bb = add(3, 2);
// const aa = add("a", "b");
// const cc = add("a", 1);
// const dd = add(3, "a");

// //use type casting to tell Typescript that result is a string here
// const result = add("  hello  ", " world    ");
// result.split(" ");

// demonstrate optional chaining start

const fetchedUserData = {
  id: "u1880099",
  name: "Rose",
  //job: { title: "CEOoooooooo", descrition: "My own company" },
};
console.log((fetchedUserData as any).job?.title);

//this also works
console.log((<any>fetchedUserData).job?.title);
console.log(fetchedUserData.id);

// //in javascript and ols way of typesript use the following syntax
// console.log(
//   fetchedUserData && fetchedUserData.job && fetchedUserData.job.title
// );

//stop demonstration of optional chaining

// //Below demonstrating type guards for class type checking
// //use instanceof
// class Car {
//   drive() {
//     console.log("Driving a car...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Drive a truck ... ");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo ... ", amount);
//   }
// }

// //create a union type
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// //create a function which can do everything Vehicle type can do
// function useVehicle(vehicle: Vehicle, x: number) {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(x);
//   }
// }

// useVehicle(v1, 5);
// useVehicle(v2, 99);

// //below demonstrate Discriminated union type

// // create two interface types, Bird and Horse
// interface Bird {
//   aa: "bird"; //create a literal type
//   flyingSpeed: number;
// }

// interface Horse {
//   aa: "horse"; //create a literal type
//   runningSpeed: number;
// }

// //create an union type
// type Animal = Bird | Horse;

// // a function checking interface type now using
// //discriminated union type
// //Note: now use switch statement
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.aa) {
//     case "bird":
//       speed = "flyingSpeed";
//       break;
//     case "horse":
//       speed = "runningSpeed";
//       break;
//   }

//   console.log(`Now animald is ${animal.aa} and its speed is: ${speed} `);
// }

// const cuteAnimal: Animal = { aa: "bird", flyingSpeed: 90 };
// moveAnimal(cuteAnimal);

// //below demonstrate Type Casting

// //way1 of typecasting: use '<type>'
// //const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// //way2 of typecasting: us 'as', this way prevent clashing with React jsx syntax
// //which also use '<>'.
// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// //if cannot use '!' to tell typescript yes there is always an HIMLInputElement
// //, then change place of using typecasting, and use if statement to check
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   //way 1
//   // (userInputElement as HTMLInputElement).value = "Hi, there!";

//   //way2
//   (<HTMLInputElement>userInputElement).value = "Hi, there";
// }

// //below demonstate Index Properties
// //Line183 define index properties
// interface ErrorContainer {
//   //{email: "Not a valid email", username: "Must start with a character!"}

//   //create a predfined property id, its value must be string
//   //because predefined property must obey the rule
//   //set by index properties in Line189, which define the value
//   //of property must be string.
//   id: string;
//   [prop: string]: string;
// }

// //create an object based on ErrorContainer interface
// //predefined property MUST be implemented, if no line
// //196, will show error
// const errorContainer: ErrorContainer = {
//   id: "88",
//   email: "Not a valid email",
//   username: "Must start with a character",
// };

// const errorBag: ErrorContainer = {
//   id: "99",

//   1: "Hello World", //here number 1 as property, and typescript consider it as a string
//   food: "apple",
// };
