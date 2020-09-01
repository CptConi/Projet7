const { Utilisateur } = require("./utilisateur.model");

module.exports = (sequelize, Sequelize) => {
	const Firepit = sequelize.define(
		"firepit",
		{
			//-----------------------------------
			// PK
			firepit_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			//-----------------------------------
			// Standard Cols
			sujet: {
				type: Sequelize.STRING,
			},
			portee: {
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
			//-----------------------------------
		},
		{
			freezeTableName: true,
		}
	);

	return Firepit;
};
