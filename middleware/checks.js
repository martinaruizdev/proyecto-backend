const {check} = require('express-validator')

const checks = [
    check('artista')
        .notEmpty().withMessage('el campo "artista" debe completarse').isString().withMessage('el campo "artista" debe ser un string'),
    check('dia')
    .notEmpty().withMessage('el campo "dia" debe completarse').isString().withMessage('el campo "dia" debe ser un string'),
    check('hora')
    .notEmpty().withMessage('el campo "hora" es requerido').isNumeric().withMessage('el campo "hora" debe ser un number'),
    check('stage')
    .notEmpty().withMessage('el campo "stage" debe completarse').isString().withMessage('el campo "stage" debe ser un string')
]

module.exports = checks