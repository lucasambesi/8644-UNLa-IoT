const express = require('express')
const router = express.Router()
const moment = require('moment');

var dispositivos = require('../database/DataTest/dispositivos.json')

var data = require('../database/DataTest/data.json')

var planta1 = require('../database/DataTest/planta1.json')
var planta2 = require('../database/DataTest/planta2.json')

var tanque1 = require('../database/DataTest/tanque1.json')
var tanque2 = require('../database/DataTest/tanque2.json')
var tanque3 = require('../database/DataTest/tanque3.json')
var tanque4 = require('../database/DataTest/tanque4.json')
var tanque5 = require('../database/DataTest/tanque5.json')
var tanque6 = require('../database/DataTest/tanque6.json')

var lastPHall = require('../database/DataTest/lastPHall.json')
var lastPHtanque1 = require('../database/DataTest/lastPHtanque1.json')
var lastPHtanque2 = require('../database/DataTest/lastPHtanque2.json')
var lastPHtanque3 = require('../database/DataTest/lastPHtanque3.json')
var lastPHtanque4 = require('../database/DataTest/lastPHtanque4.json')
var lastPHtanque5 = require('../database/DataTest/lastPHtanque5.json')
var lastPHtanque6 = require('../database/DataTest/lastPHtanque6.json')

var lastWeekPHall = require('../database/DataTest/lastWeekPHall.json')
var lastWeekPHtanque1 = require('../database/DataTest/lastWeekPHtanque1.json')
var lastWeekPHtanque2 = require('../database/DataTest/lastWeekPHtanque2.json')
var lastWeekPHtanque3 = require('../database/DataTest/lastWeekPHtanque3.json')
var lastWeekPHtanque4 = require('../database/DataTest/lastWeekPHtanque4.json')
var lastWeekPHtanque5 = require('../database/DataTest/lastWeekPHtanque5.json')
var lastWeekPHtanque6 = require('../database/DataTest/lastWeekPHtanque6.json')

 //#region Index
router.get('/', (req, res) => {
    res.render('index', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      dispositivos : dispositivos,
      moment: moment
  })

})
//#endregion

//#region Plantas Broker MQTT
router.get('/planta1', (req, res) => {
    res.render('plantas', {
      planta : 'planta1',
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      data : planta1,
      moment: moment
    })

})

router.get('/planta2', (req, res) => {
  res.render('plantas', {
    planta : 'planta2',
    tituloHead:'PP UNLa',
    titulo : 'Dashboard PP UNLa',
    data : planta2,
    moment: moment
  })
})
//#endregion

//#region Dash Board

router.get('/graficos', (req, res) => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 1',
      lastPhAll : lastPHall,
      lastPH: lastPHtanque1,
      lastWeekPH : lastWeekPHtanque1,
      moment: moment
    })
  })

router.get('/tanque1', (req, res) => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 1',
      lastPhAll : lastPHall,
      lastPH: lastPHtanque1,
      lastWeekPH : lastWeekPHtanque1,
      moment: moment
    })
  })

router.get('/tanque2', (req, res) => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 2',
      lastPhAll : lastPHall,
      lastPH: lastPHtanque2,
      lastWeekPH : lastWeekPHtanque2,
      moment: moment
    })
  })

router.get('/tanque3', (req, res) => {
    res.render('charts/graficos', {
      tituloHead:'PP UNLa',
      titulo : 'Dashboard PP UNLa',
      nombreTanque: 'Tanque 3',
      lastPhAll : lastPHall,
      lastPH: lastPHtanque3,
      lastWeekPH : lastWeekPHtanque3,
      moment: moment
    })
  })

router.get('/tanque4', (req, res) => {
      res.render('charts/graficos', {
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        nombreTanque: 'Tanque 4',
        lastPhAll : lastPHall,
        lastPH: lastPHtanque4,
        lastWeekPH : lastWeekPHtanque4,
        moment: moment
      })
    })

router.get('/tanque5', (req, res) => {
      res.render('charts/graficos', {
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        nombreTanque: 'Tanque 5',
        lastPhAll : lastPHall,
        lastPH: lastPHtanque5,
        lastWeekPH : lastWeekPHtanque5,
        moment: moment
      })
    })


router.get('/tanque6', (req, res) => {
      res.render('charts/graficos', {
        tituloHead:'PP UNLa',
        titulo : 'Dashboard PP UNLa',
        nombreTanque: 'Tanque 6',
        lastPhAll : lastPHall,
        lastPH: lastPHtanque6,
        lastWeekPH : lastWeekPHtanque6,
        moment: moment
      })
    })
//#endregion

module.exports = router