const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Client = sequelize.define('client', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    companyName: {type: DataTypes.STRING}
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    companyName: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    phone: {type: DataTypes.INTEGER},
    companyInfo: {type: DataTypes.STRING}
})

Company.hasMany(Client)
Client.belongsTo(Company)


module.exports = {
    Client,
    Company
}
