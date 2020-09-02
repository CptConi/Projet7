const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.utilisateur = require("./utilisateur.model.js")(sequelize, Sequelize);
db.firepit = require("./firepit.model.js")(sequelize, Sequelize);
db.message = require("./message.model.js")(sequelize, Sequelize);
db.thumbup = require("./thumbup.model.js")(sequelize, Sequelize);

//Foreign Key Management:
db.utilisateur.hasMany(db.firepit);
db.firepit.belongsTo(db.utilisateur);

db.firepit.hasMany(db.message);
db.message.belongsTo(db.firepit);
db.utilisateur.hasMany(db.message);
db.message.belongsTo(db.utilisateur);

db.utilisateur.hasMany(db.thumbup);
db.thumbup.belongsTo(db.utilisateur);

db.message.hasOne(db.thumbup);
db.thumbup.belongsTo(db.message);

module.exports = db;
