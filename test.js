const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Gabi@2016', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log("Falha ao conectar: "+erro)
})