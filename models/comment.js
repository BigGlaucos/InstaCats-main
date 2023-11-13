const {DataTypes} = require('sequelize')

const db = require('../config/conn')

const User = require('./User')
const Publication = require('./publication')

const Comment = db.define('Comment',{
    comment:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

User.belongsToMany(Publication,{through: 'Comment'});
Publication.belongsToMany(User,{through: 'Comment'});

module.exports = Comment