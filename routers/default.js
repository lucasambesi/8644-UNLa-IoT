const express = require('express')
const router = express.Router()
const conexion = require('../database/db')
const broker = require('../brokerMqtt/mqtt')
const {getData,getLastPhByTanque} = require('../Services/DataService')

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


router.post('/test', function (req, res, next) {
  db.query("select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = 'registros'; ", (error, results, fields) => {
      if (error) throw error;
      db.query("SELECT * FROM registros", (error, resp, fields) => {
          if (error) throw error;
          res.render('test', {
              dataRegistros: resp,
              columnNames: results
          });
      });
  });
});

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
        lastPH: resultGetLastPhByTanque
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
        lastPH: resultGetLastPhByTanque
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
      lastPH: resultGetLastPhByTanque
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
      lastPH: resultGetLastPhByTanque
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
      lastPH: resultGetLastPhByTanque
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
      lastPH: resultGetLastPhByTanque
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
      lastPH: resultGetLastPhByTanque
    })
   })
})
})
//#endregion

module.exports = router