const {Schema, model} = require('mongoose')

const schema = new Schema({
    artista: {
        type: String,
        required: true
    },
    dia: {
        type: String,
        required: true,
        enum: ['viernes', 'sabado', 'domingo']
    },
    hora: {
        type: Number,
        required: true
    },
    stage: {
        type: String,
        required: true,
        enum: ['main 1', 'main 2', 'alternative', 'perrys']
    },
})


const Artista = model('Artista', schema)

module.exports={Artista}