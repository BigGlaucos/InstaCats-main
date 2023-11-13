const { DataTypes } = require("sequelize");
const db = require("../config/conn.js");
const bcrypt = require("bcryptjs");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});
User.addHook("beforeCreate", async (user) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;
