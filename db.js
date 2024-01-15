const Sequelize = require('sequelize');

const sequelize = new Sequelize("bd_macaco", "root", "W7301@jqir#", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function() {
    console.log("Erro conexão com banco de dados não realizado com sucesso!")
})

module.exports = sequelize;