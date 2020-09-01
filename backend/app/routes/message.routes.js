module.exports = (app) => {
	const message = require("../controllers/message.controller.js");

	var router = require("express").Router();

	router.post("/message/", message.create);

	router.get("/message/:id", message.getmessage);

	router.get("/message/", message.getmessages);
};
