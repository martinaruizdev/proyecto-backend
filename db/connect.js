const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Se conectó a la base de datos exitosamente.')
    } catch {
        console.log('Error en la conexión con la base de datos.')
    }
}

module.exports = { connect }