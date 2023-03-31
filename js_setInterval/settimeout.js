function startProgramAtTime(timeStr) {
    // 将时间字符串转换为Date对象
    const time = new Date();
    const [hours, minutes] = timeStr.split(":");
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    time.setSeconds(0);
    time.setMilliseconds(0);

    // 如果时间已经过去了，就设置为明天同一时间
    if (time.getTime() < Date.now()) {
        time.setDate(time.getDate() + 1);
    }

    // 计算当前时间到指定时间的毫秒数
    const delay = time.getTime() - Date.now();

    // 设置定时器
    setTimeout(function () {
        //要執行的程式
        console.log(timeStr);
    }, delay);
}

// 使用示例
startProgramAtTime("10:20"); // 在每天的中午10:20运行程序
