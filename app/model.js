const redisClient = require("./config/redis");

//id is key, signalData is value
exports.saveCallId = (key, value) => {
    return new Promise((resolve, reject) => {
        //expiry is set to 1 day i.e. 86400 seconds
        //after 1 day, redis will automatically clear the values
        redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
};

exports.getCallId = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.GET(key, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
};