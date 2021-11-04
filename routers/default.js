const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const broker = require('../brokerMqtt/mqtt')

// const data = [{"id":"11","topic":"sensor4","mensaje":"6.7","create_at":"2021-11-04 04:57:25.035733"}, {"id":"10","topic":"sensor7","mensaje":"7","create_at":"2021-11-04 02:04:07.016608"}, {"id":"9","topic":"sensor9","mensaje":"9.7","create_at":"2021-11-04 02:02:00.399186"}, {"id":"8","topic":"sensor8","mensaje":"1.4","create_at":"2021-11-04 02:02:00.396761"}, {"id":"7","topic":"sensor7","mensaje":"8.6","create_at":"2021-11-04 02:02:00.393263"}, {"id":"6","topic":"sensor15","mensaje":"7.9","create_at":"2021-11-04 01:37:04.239997"}, {"id":"5","topic":"sensor14","mensaje":"6.5","create_at":"2021-11-04 01:37:04.238867"}, {"id":"4","topic":"sensor13","mensaje":"7.4","create_at":"2021-11-04 01:37:04.235616"}]
// const dispositivos = [{"id":"20","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 1","tanque":"tanque 1","planta":"planta 1","topic":"sensor1"}, {"id":"21","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 2","tanque":"tanque 1","planta":"planta 1","topic":"sensor2"}, {"id":"22","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 3","tanque":"tanque 1","planta":"planta 1","topic":"sensor3"}, {"id":"23","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 4","tanque":"tanque 2","planta":"planta 1","topic":"sensor4"}, {"id":"24","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 5","tanque":"tanque 2","planta":"planta 1","topic":"sensor5"}, {"id":"25","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 6","tanque":"tanque 2","planta":"planta 1","topic":"sensor6"}, {"id":"26","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 7","tanque":"tanque 3","planta":"planta 1","topic":"sensor7"}, {"id":"27","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 8","tanque":"tanque 3","planta":"planta 1","topic":"sensor8"}, {"id":"28","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 9","tanque":"tanque 3","planta":"planta 1","topic":"sensor9"}, {"id":"29","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 10","tanque":"tanque 1","planta":"planta 2","topic":"sensor10"}, {"id":"30","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 11","tanque":"tanque 1","planta":"planta 2","topic":"sensor11"}, {"id":"31","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 12","tanque":"tanque 1","planta":"planta 2","topic":"sensor12"}, {"id":"32","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 13","tanque":"tanque 2","planta":"planta 2","topic":"sensor13"}, {"id":"33","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 14","tanque":"tanque 2","planta":"planta 2","topic":"sensor14"}, {"id":"34","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 15","tanque":"tanque 2","planta":"planta 2","topic":"sensor15"}, {"id":"35","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 16","tanque":"tanque 3","planta":"planta 2","topic":"sensor16"}, {"id":"36","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 17","tanque":"tanque 3","planta":"planta 2","topic":"sensor17"}, {"id":"37","create_at":"2021-11-03 03:25:00.000000","nombre":"sensor 18","tanque":"tanque 3","planta":"planta 2","topic":"sensor18"}]
router.get('/', (req, res) => {

    conexion.query('select * from dispositivos', (error, results) => {
      if (error) throw error
      else{
        res.render('index', {
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          dispositivos : results
      })
      }
    })
  //   res.render('index', {
  //     tituloHead:'PP UNLa',
  //     titulo : 'Dashboard PP UNLa',
  //     dispositivos : dispositivos
  // })
})

router.get('/planta1', (req, res) => {

    conexion.query('select * from data order by create_at desc', (error, results) => {
      if (error) throw error
      else{
        res.render('plantas', {
          planta : 'planta1',
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          data : results
        })
      }
    })

  // res.render('plantas', {
  //   planta : 'planta1',
  //   tituloHead:'PP UNLa',
  //   titulo : 'Dashboard PP UNLa',
  //   data : data
  // })
})

router.get('/planta2', (req, res) => {

    conexion.query('select * from data order by create_at desc', (error, results) => {
      if (error) throw error
      else{
        res.render('plantas', {
          planta : 'planta2',
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          data : results
        })
      }
    })
})

module.exports = router