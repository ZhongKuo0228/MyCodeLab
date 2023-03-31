import redis from "./ioRedis.js";
//應用於計數器
// 增加一個key和value
redis.set("myCounter", 10);

redis.incr("myCounter", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("incr", result); // 11
    }
});

redis.decr("myCounter", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("decr", result); // 9
    }
});

//指定遞增數為10並依此對key的value值進行遞增10
redis.incrby("myCounter", 10, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("incrby", result); //
    }
});

redis.decrby("myCounter", 10, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("decrby", result); //
    }
});
