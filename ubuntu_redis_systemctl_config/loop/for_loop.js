import Redis from "ioredis";

const cluster = new Redis.Cluster([
    {
        port: 36379,
        host: "localhost",
    },
    {
        port: 36380,
        host: "localhost",
    },
    {
        port: 36381,
        host: "localhost",
    },
    {
        port: 36382,
        host: "localhost",
    },
    {
        port: 36383,
        host: "localhost",
    },
    {
        port: 36384,
        host: "localhost",
    },
]);

async function setvalue(key, value) {
    try {
        cluster.set(key, value);
        console.log("set value done");
    } catch (e) {
        const err = new Error();
        err.stack = "can not connect with redis-server ";
        err.status = 500;
    }
    return;
}
async function getvalue(key) {
    let aa;
    try {
        aa = await cluster.get(key);
    } catch (e) {
        const err = new Error();
        err.stack = "can not connect with redis-server ";
        err.status = 500;
    }
    return aa;
}
setvalue("haha", "XDD");
let aaaa = await getvalue("haha");
console.log(aaaa);
//----測試頻率-------------------------------------
const sec = 1800;

//---在180秒內不間斷寫入快取-------------------------
for (let i = 0; i < sec; i++) {
    setTimeout(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
        const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

        cluster
            .set(i, currentTime)
            .then(() => {
                return cluster.get(i);
            })
            .then((value) => {
                console.log(`${i}`, value);
            })
            .catch((error) => {
                console.error(error);
                return;
            });
    }, i * 333);
}
