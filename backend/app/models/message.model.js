const { Utilisateur } = require("./utilisateur.model");
const { Firepit } = require("./firepit.model");

module.exports = (sequelize, Sequelize) => {
	const Message = sequelize.define(
		"message",
		{
			//PK
			message_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			//-----------------------------------
			// Standard Cols
			content: {
				type: Sequelize.STRING,
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
			firepit_fk: {
				type: Sequelize.INTEGER,
				references: {
					model: Firepit,
					key: "firepit_id",
				},
			},
		},
		{
			freezeTableName: true,
		}
	);

	return Message;
};
