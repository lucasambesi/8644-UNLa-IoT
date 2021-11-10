const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const broker = require('../brokerMqtt/mqtt')
const {getData} = require('../Services/DataService')

 //#region Index
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
})
//#endregion

//#region Plantas Broker MQTT
router.get('/planta1', (req, res) => {
    getData(conexion,'tanque1',result => {
      res.render('plantas', {
        planta : 'planta1',
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        data : result
      })
    })
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
//#endregion

//#region Dash Board
router.get('/graficos', (req, res) => {
  getLastPhByTanque(conexion,'tanque1',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 1',
      lastPH: result
    })
   })
})

router.get('/tanque1', (req, res) => {
  getLastPhByTanque(conexion,'tanque1',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 1',
      lastPH: result
    })
   })
})

router.get('/tanque2', (req, res) => {
  getLastPhByTanque(conexion,'tanque2',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 2',
      lastPH: result
    })
   })
})

router.get('/tanque3', (req, res) => {
  getLastPhByTanque(conexion,'tanque3',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 3',
      lastPH: result
    })
   })
})

router.get('/tanque4', (req, res) => {
  getLastPhByTanque(conexion,'tanque4',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 4',
      lastPH: result
    })
   })
})

router.get('/tanque5', (req, res) => {
  getLastPhByTanque(conexion,'tanque5',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 5',
      lastPH: result
    })
   })
})


router.get('/tanque6', (req, res) => {
  getLastPhByTanque(conexion,'tanque6',result => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : result,
      nombreTanque: 'Tanque 6',
      lastPH: result
    })
   })
})
//#endregion

module.exports = router