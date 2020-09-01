module.exports = (app) => {
	const firepit = require("../controllers/firepit.controller.js");

	var router = require("express").Router();


	router.post("/firepit/", firepit.create);

	router.get("/firepit/:id", firepit.getFirepit);

	router.put("/firepit/:id", firepit.update);

	router.delete("firepit/:id", firepit.delete);
};
