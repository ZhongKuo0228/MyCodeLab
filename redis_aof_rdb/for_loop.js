import redis from "./ioRedis.js";
//----測試頻率-------------------------------------
const sec = 180;

//---在180秒內不間斷寫入快取-------------------------
for (let i = 0; i < sec; i++) {
    setTimeout(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
        const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

        redis
            .set(i, currentTime)
            .then(() => {
                return redis.get(i);
            })
            .then((value) => {
                console.log(`${i}`, value);
            })
            .catch((error) => {
                return;
                console.error(error);
            });
    }, i * 333);
}

