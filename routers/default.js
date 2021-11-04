const express = require('express')
const router = express.Router()
const conexion = require('../database/db')

router.get('/', (req, res) => {
    // res.render('index', {
    //     tituloHead:'EJS',
    //     titulo : 'subtitulo dinamico'
    // })
    conexion.query('select * from dispositivos', (error, results) => {
      if (err) throw err
      else{
        res.send(results)
      }
    })
})

module.exports = router