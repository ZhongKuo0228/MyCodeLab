import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();
const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USERNAME, //已經不是預設的
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB, //設定連線的資料庫編號
    enableReadyCheck: false, //關掉info提醒
});

redis.on("connect", () => {
    console.log("Connected to Redis");
});

redis.on("error", (err) => {
    console.error("Error connecting to Redis: ", err);
});

export default redis;


//redis可用指令
// SET      =>設定一組key與value值．
// SETNX    
// SETEX
// SETXX
// PSETEX
// GET      =>取得指定key的value值． get key1
// GETSET
// STRLEN
// APPEND
// SETRANGE
// GETRANGE
// INCR     => 數值遞增1.  key1 value+1
// INCRBY   => 數值依照設定數值進行遞增．  key1 "value" + "1"
// INCRBYFLOAT
// DECR
// DECRBY
// MSET     => 一次設定多筆key與value值． mset key1 123 key2 456 key3 789
// MSETNX   
// MGET     => 一次取得多個指定key的value值．  mget key1 key2 key3


//string最大可以存512MB