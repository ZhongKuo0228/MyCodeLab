import module from "./module.js";
console.time("ESM");

for (var i = 0; i < 100000; i++) {
    module;
}

console.timeEnd("ESM");
