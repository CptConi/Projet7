const db = require("../models");
const Message = db.message;
const Op = db.Sequelize.Op;

// create a Message
exports.create = (req, res) => {
	// Validate request
	if (!req.body.content) {
		res.status(400).send({
			message: "Request content must not be empty",
		});
		return;
	}
	// Create a Message
	const message = {
		content: req.body.content,
		firepit_id: req.body.firepit_id,
		auteur_id: req.body.user_id,
	};
	// Save Message in the database
	Message.create(message)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Message.",
			});
		});
};

// Get Messages list
exports.getMessages = (req, res) => {};

// Get Messagefrom id
exports.getMessage = (req, res) => {};

// ----------------------After this line, function may be useless
// // Update Message
// exports.update = (req, res) => {};

// // Delete Message
// exports.delete = (req, res) => {};
