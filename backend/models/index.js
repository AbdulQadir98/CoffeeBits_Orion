const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: 'localhost',
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.models.js")(sequelize, Sequelize);
db.booking = require ("./booking.models.js")(sequelize, Sequelize);
db.planet = require ("./planet.models.js")(sequelize, Sequelize);
db.schedule = require("./flight.schedule.js")(sequelize, Sequelize);
db.passenger= require ("./passenger.models.js")(sequelize, Sequelize);
db.classInfo = require("./class.info.models.js")(sequelize, Sequelize);
db.planetInfo = require ("./planet.info.models.js")(sequelize, Sequelize);

	
db.user.hasMany(db.booking);
db.planet.hasMany(db.planetInfo);
db.schedule.hasMany(db.classInfo);
db.booking.hasMany(db.passenger);

db.schedule.belongsTo(db.planet, {as: 'destination'});
db.schedule.belongsTo(db.planet, {as: 'start'});


module.exports = db;