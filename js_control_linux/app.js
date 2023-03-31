import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
import { spawn } from "child_process";
//---router----------------------------------------
app.get("/receive", function (req, res) {
    const child = spawn("ls", ["-lh"]);
    child.on("exit", (code) => {
        console.log(`Child process exited with code ${code}`);
    });

    child.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
        // res.send(data); //會直接傳送一個檔案，打開是執行結果
        const recode = data.toString("utf8");
        res.json({ data: recode });
    });
    
    child.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });
});
// ---透過post下指令
app.post("/command", async function (req, res) {
    const command = req.body.data;
    try {
        const child = spawn(`${command}`);
        child.on("exit", (code) => {
            console.log(`Child process exited with code ${code}`);
        });
        child.stdout.on("data", (data) => {
            console.log(`stdout: ${data}`);
            const recode = data.toString("utf8");
            res.json({ data: recode });
        });
        child.stderr.on("data", (data) => {
            console.log(`stderr: ${data}`);
        });
        child.on("error", (err) => {
            // 在 ChildProcess 實例上設定 error 事件監聽器
            console.error(`Error occurred while executing command: ${err}`);
            res.status(500).json({ error: "Error occurred while executing command" });
        });
    } catch (err) {
        // 在 try-catch 塊中處理錯誤
        console.error(`Error occurred while executing command: ${err}`);
        res.status(500).json({ error: "Error occurred while executing command" });
    }
});

//---listen-----------------------------------------
app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log("My Server Is Running!");
});
