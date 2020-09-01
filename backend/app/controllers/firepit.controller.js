const db = require("../models");
const Firepit = db.firepit;
const Op = db.Sequelize.Op;

// Create new Firepit
exports.create = (req, res) => {
	// Validate request
	if (!req.body.sujet) {
		res.status(400).send({
			message: "Request content must not be empty",
		});
		return;
	}
	// Create a Firepit
	const firepit = {
		sujet: req.body.sujet,
		portee: req.body.portee,
		user_id: req.body.user_id,
	};
	// Save Firepit in the database
	Firepit.create(firepit)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Tutorial.",
			});
		});
};

// Get Firepit from id
exports.getFirepit = (req, res) => {};

// Update Firepit informations: sujet, portee
exports.update = (req, res) => {};

// Delete existing Firepit
exports.delete = (req, res) => {};