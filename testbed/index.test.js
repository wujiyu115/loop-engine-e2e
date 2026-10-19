const { add } = require("./index");

if (add(1, 2) !== 3) throw new Error("add(1,2) should be 3");
if (add(-1, 1) !== 0) throw new Error("add(-1,1) should be 0");
console.log("testbed tests passed");
