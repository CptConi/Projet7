const db = require("../models");
const Utilisateur = db.utilisateur;
const Op = db.Sequelize.Op;

// Sign up
exports.signUp = (req, res) => {};

// Log in
exports.LogIn = (req, res) => {};

// Get User informations
exports.getUser = (req, res) => {};

// Get User list
exports.getUsers = (req, res) => {};

// Update User informations / profile
exports.update = (req, res) => {};

// Delete User
exports.delete = (req, res) => {};

//TEST method:

exports.createTestUser = (req, res) => {
	const randomUser = {
		email: req.body.email,
		password: req.body.password,
		prenom: req.body.prenom,
		nom: req.body.nom,
		poste: req.body.poste,
		isAdmin: true,
	};
	// Save Firepit in the database
	Utilisateur.create(randomUser)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Maybe Admin already created ?",
			});
		});
};
