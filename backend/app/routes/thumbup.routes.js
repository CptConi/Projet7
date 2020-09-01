module.exports = (app) => {
	const thumbUp = require("../controllers/thumbup.controller.js");

	var router = require("express").Router();

    router.get("/thumbup/:id", thumbUp.getLikes);
    
	router.post("/thumbup/:id", thumbUp.setLikes);
};
