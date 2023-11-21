const {Artista} = require('../models/artistas')

const apiController = {
    async apiGet (req, res){
        const infoArtistas = await Artista.find()
        res.json(infoArtistas)
    },
    async apiGetOne (req, res){ 
        const infoArtistas = await Artista.findOne(req.params)
        res.json(infoArtistas)
    },
    async apiGetList (req, res){
        const infoArtistas = await Artista.find(req.query)
        res.json(infoArtistas)
    },
    async apiGetId (req, res){ 
        const infoArtistas = await Artista.findById(req.params.id)
        res.json(infoArtistas)
    },
    async apiPost (req, res){
        try {
            const nuevoArtista = new Artista(req.body)
            await nuevoArtista.save()
            res.status(201).json(nuevoArtista)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    async apiPut (req, res){
        await Artista.findByIdAndUpdate(req.params.id, req.body)
        const editar = await Artista.findById(req.params.id)
        res.status(201).json(editar)
    },
    async apiDelete (req, res){
        await Artista.findByIdAndDelete(req.params.id)
        res.status(200).send('Se eliminó el artista.')
    }
}


module.exports = apiController