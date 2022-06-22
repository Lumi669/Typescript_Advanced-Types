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
  name: "rose",
  privileges: ["create-server"],
  startDate: new Date(),
};
