module.exports = (app) => {
	const utilisateur = require("../controllers/utilisateur.controller");

	var router = require("express").Router();

	router.post("/signup", utilisateur.signUp);

	router.post("/login", utilisateur.logIn);

	// router.get("/:id", utilisateur.getUser);

	// router.get("/", utilisateur.getUsers);

	router.put("/", utilisateur.update);

	// router.delete("/:id", utilisateur.delete);


	//Automatic create super user
	router.post('/create', utilisateur.createTestUser);

	app.use("/user", router);
};
