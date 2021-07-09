module.exports = (socket) => {
    try {
        console.log("Connected");
        //using on() and emit() event names
        socket.on("code", (data, callback) => {
            socket.broadcast.emit("code", data);
        });
    }
    catch (ex) {
        console.log(ex.message);
    }
};