const {Artista} = require('../models/artistas')

const validarNombre = async (req, res, next) =>{
    try {
        const buscar = await Artista.findOne(req.params)
        if (buscar !== null) {
            next()
        } else {
            res.status(400).json({
                msg: 'el nombre ' + req.params + ' es incorrecto o no se ha cargado todavía.'
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { validarNombre }