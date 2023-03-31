import { exec } from "child_process";
import { writeFile } from "node:fs/promises";

//---tcp server------------------------------------
import net from "net";
// 连接到 TCP 服务器
const socket = net.createConnection({ port: 8000 }, () => {
    console.log("已连接到 TCP 服务器");
});

// 当收到数据时，将其从套接字发送到另一个服务器
socket.on("data", async (data) => {
    console.log("从 TCP 服务器收到数据:", data.toString());
    // 将数据发送到另一个服务器
    // socket.write(data);

    const temp = data.toString();
    const job = JSON.parse(temp);
    const fileName = `${job.executeId}.js`;

    await writeFile(fileName, job.code);

    const command = `docker run -v /Users/zhongkuo/Desktop/Back-End-Class-Batch19/MyCodeLab/js_control_linux/${fileName}:/app/${fileName} node:18-alpine node /app/${fileName}`; //使用exec所以-it要拿掉
    const child = exec(command);

    child.stdin.on("exit", (code) => {
        console.log(`Child process exited with code ${code}`);
    });
    child.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
        job.result = data;
        socket.write(JSON.stringify(job));
    });
    child.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });
});

// 当连接关闭时，记录并删除套接字引用
socket.on("end", () => {
    console.log("与 TCP 服务器的连接已关闭");
    socket = null;
});

socket.on("error", (err) => {
    console.error(err);
});
