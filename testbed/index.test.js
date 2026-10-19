const { add, sub } = require("./index");

if (add(1, 2) !== 3) throw new Error("add(1,2) should be 3");
if (add(-1, 1) !== 0) throw new Error("add(-1,1) should be 0");
if (sub(5, 3) !== 2) throw new Error("sub(5,3) should be 2");
if (sub(3, 5) !== -2) throw new Error("sub(3,5) should be -2");
if (sub(4, 4) !== 0) throw new Error("sub(4,4) should be 0");
console.log("testbed tests passed");
