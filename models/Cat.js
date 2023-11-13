const { DataTypes } = require("sequelize");
const db = require("../config/conn.js");

const Cat = db.define("Cat", {
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  width: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = Cat;
