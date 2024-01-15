const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('tbl_macaco', {
    ID_Macaco: {
        type: Sequelize.SMALLINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Pais_Origem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Nome_Macaco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Idade: {
        type: Sequelize.TINYINT ,
        allowNull: false,
    }
});

//User.sync();

module.exports = User;