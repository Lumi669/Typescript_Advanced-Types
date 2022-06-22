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

//create a new type based on the above
//two types
type ElevatedEmployee = Admin & Employee;

//create an object with ElevatedEmployee type
const e1: ElevatedEmployee = {
  name: "Rose",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log("e1 = ", e1);

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
