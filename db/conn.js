const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('carlos0510','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('conectado')
}).catch((error)=>{
    console.error('erro d conexão', error)
})

module.exports = sequelize