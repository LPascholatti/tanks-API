const Sequelize = require("sequelize");
const db = require("../db");

const Tanks = db.define("tanks", {
id: { type: Sequelize.INTEGER, primaryKey: true },
type: Sequelize.STRING,
country: Sequelize.STRING,
name: Sequelize.STRING,
ammunition: {type: Sequelize.ARRAY(Sequelize.TEXT)},
img: Sequelize.STRING
});

module.exports = Tanks;