const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Cliente = require('./Cliente')

const Produto = db.define('produto', {
    nome: {
        type: DataTypes.STRING(40)
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    preco: {
        type: DataTypes.DOUBLE
    }
},{
    createdAt: false,
    updatedAt: false
})

Cliente.hasOne(Produto)
Produto.belongsTo(Cliente)


// Produto.sync({force:true})
module.exports = Produto