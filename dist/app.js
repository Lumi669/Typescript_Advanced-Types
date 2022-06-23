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
//# sourceMappingURL=app.js.map