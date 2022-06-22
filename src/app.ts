//define an Admin type which is an
//object type, this is not creating
//an object here, we are defining a type.
//here can be done with interface as well
// type Admin = {
//   name: string;
//   privileges: string[];
// };

//replace above type Admin with interface Admin
interface Admin {
  name: string;
  privileges: string[];
}

//define an Employee type
// type Employee = {
//   name: string;
//   startDate: Date;
// };

//replace type Empolyee with interface Employee
interface Employee {
  name: string;
  startDate: Date;
}

//create a new type based on the above
//two types
// type ElevatedEmployee = Admin & Employee;

//replace type ElevatedEmployee with interface ElevatedEmployee
interface ElevatedEmployee extends Admin, Employee {}

//create an object with ElevatedEmployee type
const e1: ElevatedEmployee = {
  name: "rosey",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log("e1 = ", e1);
