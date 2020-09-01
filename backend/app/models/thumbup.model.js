const { Utilisateur } = require("./utilisateur.model");
const { Message } = require("./message.model");

module.exports = (sequelize, Sequelize) => {
	const ThumbUp = sequelize.define(
		"Thumbup",
		{
			//-----------------------------------
			//PK
			message_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			//-----------------------------------
			// Standard Cols
			user_id: {
				type: Sequelize.INTEGER,
			},
			//-----------------------------------
			// FK
			user_fk: {
				type: Sequelize.INTEGER,
				references: {
					model: Utilisateur,
					key: "id",
				},
			},
			message_fk: {
				type: Sequelize.INTEGER,
				references: {
					model: Message,
					key: "message_id",
				},
			},
			//-----------------------------------
		},
		{
			freezeTableName: true,
		}
	);

	return ThumbUp;
};
