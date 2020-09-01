module.exports = (app) => {
	const utilisateur = require("../controllers/utilisateur.controller.js");

	var router = require("express").Router();

    
	router.post("/signup/", utilisateur.signUp);

	router.post("/login/", utilisateur.logIn);

	router.get("/user/:id", utilisateur.getUser);

	router.get("/user/", utilisateur.getUsers);

	router.put("/user/:id", utilisateur.update);

	router.delete("user/:id", utilisateur.delete);
};
