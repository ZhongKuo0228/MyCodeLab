// TODO: docker run
//       image: node:18-apline
//
import { exec } from "child_process";
const command =
    "docker run -v /Users/zhongkuo/Desktop/Back-End-Class-Batch19/MyCodeLab/js_control_linux/:/app node:18-alpine node /app/test.js"; //使用exec所以-it要拿掉
const child = exec(command);

child.stdin.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
});

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});
