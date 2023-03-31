import { spawn } from "child_process";

const ssh = spawn("ssh", ["-q", "-i", "/Users/zhongkuo/.ssh/ssh-key-2023-02-18.key", "ubuntu@146.56.102.243"], {
    env: {
        SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh",
        SSH_PRIVATE_KEY: "/Users/zhongkuo/.ssh/ssh-key-2023-02-18.key",
    },
});


ssh.stdin.write("docker run hello-world\n"); //要下指令的部分，結尾要\n

ssh.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

ssh.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
});
