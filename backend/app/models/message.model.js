module.exports = (sequelize, Sequelize) => {
	const Message = sequelize.define(
		"message",
		{
			//-----------------------------------
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
			// auteur_id: {
			// 	type: Sequelize.INTEGER,
			// 	references: {
			// 		model: Utilisateur,
			// 		key: "id",
			// 	},
			// },
			// firepit_id: {
			// 	type: Sequelize.INTEGER,
			// 	references: {
			// 		model: Firepit,
			// 		key: "firepit_id",
			// 	},
			// },
			//-----------------------------------
		},
		{
			freezeTableName: true,
		}
	);

	return Message;
};
