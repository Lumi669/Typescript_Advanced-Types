"use strict";
let zero = 0;
let emptytext = "";
let boln = false;
let minusZero = -0;
let nonum = NaN;
let nulli = null;
let andi = undefined;
let zhe = ``;
let dum = document.all;
let zeroN = 0n;
let positive = 36 ?? 89;
let qty = zero ?? 42;
let message = emptytext ?? "hi!";
let aa = boln ?? "apple";
let bb = minusZero ?? "hello minusZero";
let cc = nonum ?? "not a number";
let dd = nulli ?? "not a null";
let ee = andi ?? "not undefined";
let ff = zhe ?? "not a zhe";
let gg = dum ?? "not a document.all";
let hh = zeroN ?? "not 0n";
console.log(qty);
console.log(message);
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee);
console.log(ff);
console.log(gg);
console.log(positive);
if (typeof hh === "bigint") {
    console.log("big int: hh = ", hh);
}
if (typeof hh === "string") {
    console.log("string hh = ", hh);
}
//# sourceMappingURL=app.js.map