import redis from "./ioRedis.js";
//應用於計數器
// 增加一個key和value
redis.set("myCounter", "0123456789");
//指定key的value字串長度
redis.strlen("myCounter", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("strlen", result);
    }
});
//指定key的value字串插入字串．
redis.append("myCounter", "abc", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("append", result);
    }
});

console.log(await redis.get("myCounter")); //async

//指定key取得value中的起始與結束字元．
redis.getrange("myCounter", 0, 5, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("getrange", result);
    }
});

//指定key取代從指定位置取代value字元．
redis.setrange("myCounter", 5, "ABC", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("setrange", result);
    }
});

console.log(await redis.get("myCounter")); //async
