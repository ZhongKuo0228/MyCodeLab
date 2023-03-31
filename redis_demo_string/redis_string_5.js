import redis from "./ioRedis.js";

//生成分佈鎖
async function acquireLock(lockName) {
    const result = await redis.set(lockName, "locked", "NX");
    return result === "OK";
}
//刪掉分佈鎖
async function releaseLock(lockName) {
    await redis.del(lockName);
}

//實際運作

if (await acquireLock("my_lock")) {
    try {
        console.log("Acquired lock");
        await new Promise((resolve) => setTimeout(resolve, 10000));
        console.log("Task completed");
    } finally {
        await releaseLock("my_lock");
    }
} else {
    console.log("Failed to acquire lock");
}

async function test() {
    const tasks = [];
    for (let i = 1; i <= 10; i++) {
        tasks.push(async () => {
            if (await acquireLock("my_lock")) {
                try {
                    console.log(`Acquired lock from task ${i}`);
                    await new Promise((resolve) => setTimeout(resolve, 10000));
                    console.log(`Task ${i} completed`);
                } finally {
                    await releaseLock("my_lock");
                }
            } else {
                console.log(`Task ${i} failed to acquire lock`);
            }
        });
    }
    await Promise.all(tasks.map((task) => task()));
}

test();
