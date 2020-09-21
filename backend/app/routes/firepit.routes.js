module.exports = (app) => {
	const firepit = require("../controllers/firepit.controller.js");

	var router = require("express").Router();

	router.post("/", firepit.create);

	router.get("/:id", firepit.getFirepit);

	router.get("/", firepit.getAll);

	router.put("/:id", firepit.update);

	router.delete("/:id", firepit.delete);

	app.use("/firepit", router);
};
