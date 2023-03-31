const moment = require("moment");

// 获取当前时间戳和上周一和上周日的时间戳
const now = Date.now();
const lastMonday = moment(now).subtract(1, "weeks").startOf("week").add(1, "days").valueOf();
const lastSunday = moment(now).subtract(1, "weeks").endOf("week").subtract(1, "days").valueOf();

console.log(lastMonday); // 输出上周一的时间戳
console.log(lastSunday); // 输出上周日的时间戳

