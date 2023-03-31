import redis from "./ioRedis.js";

//生成分佈鎖
async function acquireLock(lockName) {
    const result = await redis.set(lockName, "locked", "NX");
    return result === "OK";
}

// //5 keys
// async function test() {
//     const lockNames = ["lock1", "lock2", "lock3", "lock4", "lock5"];
//     const acquiredLocks = new Set();
//     const startTime = performance.now();
//     while (acquiredLocks.size < lockNames.length) {
//         const lockName = lockNames[Math.floor(Math.random() * lockNames.length)];
//         if (await acquireLock(lockName)) {
//             console.log(`Acquired lock "${lockName}"`);
//             acquiredLocks.add(lockName);
//         } else {
//             console.log(`Failed to acquire lock "${lockName}"`);
//         }
//         await new Promise((resolve) => setTimeout(resolve, 10));
//     }
//     const endTime = performance.now();
//     console.log(`Acquired all locks in ${endTime - startTime} ms`);
// }

// test();

// 100 keys
async function test() {
    const lockNames = Array.from({ length: 100 }, (_, i) => `lock${i}`);
    const acquiredLocks = new Set();
    const startTime = performance.now();
    while (acquiredLocks.size < lockNames.length) {
        const lockName = lockNames[Math.floor(Math.random() * lockNames.length)];
        if (await acquireLock(lockName)) {
            console.log(`Acquired lock "${lockName}"`);
            acquiredLocks.add(lockName);
        } else {
            console.log(`Failed to acquire lock "${lockName}"`);
        }
        await new Promise((resolve) => setTimeout(resolve, 10));
    }
    const endTime = performance.now();
    console.log(`Acquired all locks in ${endTime - startTime} ms`);
}

test();
