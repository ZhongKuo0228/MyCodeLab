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
let aaaa = getvalue("haha");
console.log(aaaa);
