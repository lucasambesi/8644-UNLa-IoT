const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const broker = require('../brokerMqtt/mqtt')
const moment = require('moment');

const {getDataPlanta,getData,getLastPhByTanque} = require('../Services/DataService')

 //#region Index
router.get('/', (req, res) => {
    conexion.query('select * from dispositivos', (error, results) => {
      if (error) throw error
      else{
        res.render('index', {
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          dispositivos : results,
          moment: moment
      })
      }
    })
})
//#endregion

//#region Plantas Broker MQTT
router.get('/planta1', (req, res) => {
  getDataPlanta(conexion,'planta1',result => {
        res.render('plantas', {
          planta : 'planta1',
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          data : result,
          moment: moment
        })
    })
})

router.get('/planta2', (req, res) => {

  getDataPlanta(conexion,'planta2',result => {
        res.render('plantas', {
          planta : 'planta2',
          tituloHead:'PP UNLa',
          titulo : 'Dashboard PP UNLa',
          data : result,
          moment: moment
        })
    })
})
//#endregion

//#region Dash Board
router.get('/graficos', (req, res) => {
let respuesta = '';
    getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
    respuesta = resultLastPhAllTanques
    getLastPhByTanque(conexion,'tanque1',resultGetLastPhByTanque => {
      res.render('charts/graficos', {
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        nombreTanque: 'Tanque 1',
        lastPhAll : respuesta,
        lastPH: resultGetLastPhByTanque,
        moment: moment
      })
     })
  })
})

router.get('/tanque1', (req, res) => {
   let respuesta = '';
    getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
    respuesta = resultLastPhAllTanques
    getLastPhByTanque(conexion,'tanque1',resultGetLastPhByTanque => {
      res.render('charts/graficos', {
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        nombreTanque: 'Tanque 1',
        lastPhAll : respuesta,
        lastPH: resultGetLastPhByTanque,
        moment: moment
      })
     })
  })
})

router.get('/tanque2', (req, res) => {
  let respuesta = '';
  getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
  respuesta = resultLastPhAllTanques
  getLastPhByTanque(conexion,'tanque2',resultGetLastPhByTanque => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 2',
      lastPhAll : respuesta,
      lastPH: resultGetLastPhByTanque,
      moment: moment
    })
   })
})
})

router.get('/tanque3', (req, res) => {
  let respuesta = '';
  getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
  respuesta = resultLastPhAllTanques
  getLastPhByTanque(conexion,'tanque3',resultGetLastPhByTanque => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 3',
      lastPhAll : respuesta,
      lastPH: resultGetLastPhByTanque,
      moment: moment
    })
   })
})
})

router.get('/tanque4', (req, res) => {
  let respuesta = '';
  getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
  respuesta = resultLastPhAllTanques
  getLastPhByTanque(conexion,'tanque4',resultGetLastPhByTanque => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 4',
      lastPhAll : respuesta,
      lastPH: resultGetLastPhByTanque,
      moment: moment
    })
   })
})
})

router.get('/tanque5', (req, res) => {
  let respuesta = '';
  getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
  respuesta = resultLastPhAllTanques
  getLastPhByTanque(conexion,'tanque5',resultGetLastPhByTanque => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 5',
      lastPhAll : respuesta,
      lastPH: resultGetLastPhByTanque,
      moment: moment
    })
   })
})
})


router.get('/tanque6', (req, res) => {
  let respuesta = '';
  getLastPhByTanque(conexion,'',resultLastPhAllTanques => {
  respuesta = resultLastPhAllTanques
  getLastPhByTanque(conexion,'tanque6',resultGetLastPhByTanque => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 6',
      lastPhAll : respuesta,
      lastPH: resultGetLastPhByTanque,
      moment: moment
    })
   })
})
})
//#endregion

module.exports = router