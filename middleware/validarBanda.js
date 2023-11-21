const {Artista} = require('../models/artistas')

const validarID = async (req, res, next) =>{
    try {
        const buscar = await Artista.findById(req.params.id)
        if (buscar !== null) {
            next()
        } else {
            res.status(400).json({
                msg: 'el ID ' + req.params.id + ' no existe.'
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { validarID }