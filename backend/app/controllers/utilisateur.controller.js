const db = require("../models");
const Utilisateur = db.utilisateur;
const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Sign up
exports.signUp = (req, res) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = {
				email: req.body.email,
				password: hash,
			};
			Utilisateur.create(user)
				.then(() =>
					res.status(201).json({
						message: "Utilisateur créé !",
						email: user.email
					})
				)
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

// Log in
exports.logIn = (req, res) => {
	Utilisateur.findOne({ where: { email: req.body.email } })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: "Utilisateur non trouvé !" });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({ error: "Mot de passe incorrect !" });
					}
					res.status(200).json({
						email: user.email,
						token: jwt.sign(
							{ email: user.email },
							"0F63B0D55976EEDCD6ED195A53000F570A161762",
							{
								expiresIn: "12h",
							}
						),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

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
