module.exports = (app) => {
	const message = require("../controllers/message.controller.js");

	var router = require("express").Router();

	router.post("/", message.create);

	// router.get("/:id", message.getmessage);

	router.get("/", message.getMessages);

	router.get("/fromfirepit/:id", message.getMessagesFromFirepit);

	app.use("/message", router);
};
