console.time("CJS");

for (var i = 0; i < 100000; i++) {
    var module = require("./module");
}

console.timeEnd("CJS");
