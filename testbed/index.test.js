const { add, mul } = require("./index");

if (add(1, 2) !== 3) throw new Error("add(1,2) should be 3");
if (add(-1, 1) !== 0) throw new Error("add(-1,1) should be 0");
if (mul(2, 3) !== 6) throw new Error("mul(2,3) should be 6");
if (mul(-2, 3) !== -6) throw new Error("mul(-2,3) should be -6");
if (mul(5, 0) !== 0) throw new Error("mul(5,0) should be 0");
console.log("testbed tests passed");
