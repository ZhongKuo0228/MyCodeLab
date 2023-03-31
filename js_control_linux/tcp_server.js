//---tcp server------------------------------------
import net from "net";

const server = net.createServer((socket) => {
    // 连接已建立
    console.log("客户端已连接");

    setTimeout(() => {
        let job = {
            userId: "xxx",
            executeId: "adfasdf",
            code: 'console.log("hello tcp");',
        };
        socket.write(JSON.stringify(job));
    }, 1000);

    // 将收到的数据从一个套接字传递到另一个套接字
    socket.on("data", (data) => {
        console.log("从客户端收到数据:", data.toString());
        // 将数据发送到另一个服务器
        //ocket.write(data);
    });
    // Express 服务器 1 的路由处理程序

    // 当连接关闭时，记录并删除套接字引用
    socket.on("end", () => {
        console.log("客户端已断开连接");
        socket = null;
    });

    socket.on("error", (err) => {
        console.error(err);
    });
});

server.listen(8000, () => {
    console.log("TCP 服务器正在侦听端口 8000");
});
//---router----------------------------------------
