const { DataTypes } = require('sequelize')

const db = require('../config/conn')

const Publication = db.define("Publication", {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    }
})
module.exports = Publication