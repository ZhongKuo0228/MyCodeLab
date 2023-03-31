import redis from "./ioRedis.js";

// 在 Redis 中設置第一個字符串值
redis.set("myKey", "Hello");
// 在 Redis 中設置第二個字符串值
redis.set("myKey", "Redis!");

// 從 Redis 中讀取字符串值
redis.get("myKey", (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result); 
    }
});


