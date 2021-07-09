const express = require("express");
const router = express.Router();
const controller = require('./controller');

//this api will save the call id to redis
router.post("/api/save-call-id", controller.saveCallId);

//the id we get from front-end will be passed to the controller method
router.get("/api/get-call-id/:id", controller.getCallId);

module.exports = router;