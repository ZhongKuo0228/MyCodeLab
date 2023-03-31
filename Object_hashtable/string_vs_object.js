// 使用字串
const dataStr = '{"key1": "value1", "key2": "value2", "key3": "value3", "key4": "value4"}';
const data = JSON.parse(dataStr);
const key = "key3";

console.time("String search");
//使用字串進行時間檢索需要使用 indexOf 方法來進行字串匹配。
//需要遍歷整個字串，並且其時間複雜度取決於字串的長度。
console.log(dataStr.indexOf(`"${key}"`));
console.timeEnd("String search");

// 使用物件
const dataObj = { key1: "value1", key2: "value2", key3: "value3", key4: "value4" };
key = "key3";

console.time("Object search");
console.log(dataObj[key]);
console.timeEnd("Object search");
