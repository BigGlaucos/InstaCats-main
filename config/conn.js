const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_cats",
  "aluno_medio",
  "@lunoSenai23.",
  {
    host: "localhost",
    dialect: "mysql",
  }
);


module.exports = sequelize;
