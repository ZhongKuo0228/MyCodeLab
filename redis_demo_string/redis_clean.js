import redis from "./ioRedis.js";

//清除快取
async function flushAll() {
    await redis.flushall();
}

flushAll().then(() => {
    console.log("All caches cleared");
    redis.quit();
});
