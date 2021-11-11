const conexion = require('../database/db')

function getDataPlanta(connection,tanque,callback){
    let query = ''
        switch(tanque){
            case 'planta1':
                query='select * from data where topic="sensor1" or topic="sensor2" or topic="sensor3" or topic="sensor4" or topic="sensor5" or topic="sensor6" or topic="sensor7" or topic="sensor8" or topic="sensor9" order by create_at desc LIMIT 0,200'
            break;
            case 'planta2':
                query='select * from data where topic="sensor10" or topic="sensor11" or topic="sensor12" or topic="sensor13" or topic="sensor14" or topic="sensor15" or topic="sensor16" or topic="sensor17" or topic="sensor18" order by create_at desc LIMIT 0,200'
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

function getLastPhByTanque(connection,tanque,callback){
    let query = ''
    switch(tanque){
        case 'tanque1':
            query= '(select * from data where id=(select id from data where topic= "sensor1" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor2" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor3" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque2':
            query= '(select * from data where id=(select id from data where topic= "sensor4" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor5" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor6" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque3':
            query= '(select * from data where id=(select id from data where topic= "sensor7" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor8" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor9" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque4':
            query= '(select * from data where id=(select id from data where topic= "sensor10" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor11" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor12" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque5':
            query= '(select * from data where id=(select id from data where topic= "sensor13" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor14" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor15" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque6':
            query= '(select * from data where id=(select id from data where topic= "sensor16" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor17" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor18" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        default:
            query='(select * from data where id=(select id from data where topic= "sensor1" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor2" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor3" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor4" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor5" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor6" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor7" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor8" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor9" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor10" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor11" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor12" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor13" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor14" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor15" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor16" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor17" ORDER BY create_at DESC LIMIT 0,1)) ' +
            'UNION (select * from data where id=(select id from data where topic= "sensor18" ORDER BY create_at DESC LIMIT 0,1));'
    }
        conexion.query(query, (error, results) => {
          if (error) throw error
          else{
            callback(results)
          }
        })
    } 

    function getLastWeekPhByTanque(connection,tanque,callback){
        let query = ''
        switch(tanque){
            case 'tanque1':
                query= 'select * from data where  (topic="sensor1" OR  topic= "sensor2" OR topic= "sensor3") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            case 'tanque2':
                query= 'select * from data where  (topic="sensor4" OR  topic= "sensor5" OR topic= "sensor6") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            case 'tanque3':
                query= 'select * from data where  (topic="sensor7" OR  topic= "sensor8" OR topic= "sensor9") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            case 'tanque4':
                query= 'select * from data where  (topic="sensor10" OR  topic= "sensor11" OR topic= "sensor12") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            case 'tanque5':
                query= 'select * from data where  (topic="sensor13" OR  topic= "sensor14" OR topic= "sensor15") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            case 'tanque6':
                query= 'select * from data where  (topic="sensor16" OR  topic= "sensor17" OR topic= "sensor18") and create_at >= (NOW() - INTERVAL 7 DAY)'
            break;
            default:
                query='select * from data where create_at >= (NOW() - INTERVAL 10 DAY)'
        }
            conexion.query(query, (error, results) => {
              if (error) throw error
              else{
                callback(results)
              }
            })
        } 

module.exports = {getLastWeekPhByTanque,getDataPlanta,getData,getLastPhByTanque}


