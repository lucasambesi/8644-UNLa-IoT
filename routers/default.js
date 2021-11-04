const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const broker = require('../brokerMqtt/mqtt')

router.get('/', (req, res) => {
    // res.render('index', {
    //     tituloHead:'EJS',
    //     titulo : 'subtitulo dinamico'
    // })

    conexion.query('select * from dispositivos', (error, results) => {
      if (error) throw error
      else{
        res.send(results)
      }
    })
})

module.exports = router