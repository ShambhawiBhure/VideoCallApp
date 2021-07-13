let redis = require("redis");
//credentials from redis labs
var options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  auth_pass: process.env.REDIS_PASSWORD,
};

let client = redis.createClient(options);

client.on("error", (error) => {
  console.log(error);
});

module.exports = client;