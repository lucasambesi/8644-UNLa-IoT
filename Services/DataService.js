const conexion = require('../database/db')

function getData(connection,tanque,callback){
let query = ''
    switch(tanque){
        case 'tanque1':
            query='select * from data where topic="sensor1" or topic="sensor2" or topic="sensor3" order by create_at desc'
        break;
        case 'tanque2':
            query='select * from data where topic="sensor4" or topic="sensor5" or topic="sensor6" order by create_at desc'
        break;
        case 'tanque3':
            query='select * from data where topic="sensor7" or topic="sensor8" or topic="sensor9" order by create_at desc'
        break;
        case 'tanque4':
            query='select * from data where topic="sensor10" or topic="sensor11" or topic="sensor12" order by create_at desc'
        break;
        case 'tanque5':
            query='select * from data where topic="sensor13" or topic="sensor14" or topic="sensor15" order by create_at desc'
        break;
        case 'tanque6':
            query='select * from data where topic="sensor16" or topic="sensor17" or topic="sensor18" order by create_at desc'
        break;
        default:
            query='select * from data order by create_at desc'
    }
    
    conexion.query(query, (error, results) => {
      if (error) throw error
      else{
        callback(results)
      }
    })
}

module.exports = {getData}