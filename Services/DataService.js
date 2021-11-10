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

function getLastPhByTanque(connection,tanque,callback){
    let query = ''
    switch(tanque){
        case 'tanque1':
            query= '(select * from data where id=(select id from data where topic= "sensor1" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor2" ORDER BY create_at DESC LIMIT 0,1)) UNION (select * from data where id=(select id from data where topic= "sensor3" ORDER BY create_at DESC LIMIT 0,1));'
        break;
        case 'tanque2':
            query= 'set @sensor1 := (select id from data where topic= "sensor4" ORDER BY create_at DESC LIMIT 0,1);'
              +'set @sensor2 := (select id from data where topic= "sensor5" ORDER BY create_at DESC LIMIT 0,1);'
              +'set @sensor3 := (select id from data where topic= "sensor6" ORDER BY create_at DESC LIMIT 0,1);'
              +'(select * from data where id=@sensor1) UNION (select * from data where id=@sensor2) UNION (select * from data where id=@sensor3);'
        break;
        case 'tanque3':
            query= 'set @sensor1 := (select id from data where topic= "sensor7" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor2 := (select id from data where topic= "sensor8" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor3 := (select id from data where topic= "sensor9" ORDER BY create_at DESC LIMIT 0,1);'
            +'(select * from data where id=@sensor1) UNION (select * from data where id=@sensor2) UNION (select * from data where id=@sensor3);'
        break;
        case 'tanque4':
            query= ' set @sensor1 := (select id from data where topic= "sensor11" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor2 := (select id from data where topic= "sensor12" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor3 := (select id from data where topic= "sensor13" ORDER BY create_at DESC LIMIT 0,1);'
            +'(select * from data where id=@sensor1) UNION (select * from data where id=@sensor2) UNION (select * from data where id=@sensor3);'
        break;
        case 'tanque5':
            query= ' set @sensor1 := (select id from data where topic= "sensor14" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor2 := (select id from data where topic= "sensor15" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor3 := (select id from data where topic= "sensor16" ORDER BY create_at DESC LIMIT 0,1);'
            +'(select * from data where id=@sensor1) UNION (select * from data where id=@sensor2) UNION (select * from data where id=@sensor3);'
        break;
        case 'tanque6':
            query= ' set @sensor1 := (select id from data where topic= "sensor17" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor2 := (select id from data where topic= "sensor18" ORDER BY create_at DESC LIMIT 0,1);'
            +'set @sensor3 := (select id from data where topic= "sensor19" ORDER BY create_at DESC LIMIT 0,1);'
            +'(select * from data where id=@sensor1) UNION (select * from data where id=@sensor2) UNION (select * from data where id=@sensor3);'
        break;
        default:
            query='set @sensor1 := (select id from data where topic= "sensor1" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor2 := (select id from data where topic= "sensor2" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor3 := (select id from data where topic= "sensor3" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor4 := (select id from data where topic= "sensor4" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor5 := (select id from data where topic= "sensor5" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor6 := (select id from data where topic= "sensor6" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor7 := (select id from data where topic= "sensor7" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor8 := (select id from data where topic= "sensor8" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor9 := (select id from data where topic= "sensor9" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor10 := (select id from data where topic= "sensor10" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor11 := (select id from data where topic= "sensor11" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor12 := (select id from data where topic= "sensor12" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor13 := (select id from data where topic= "sensor13" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor14 := (select id from data where topic= "sensor14" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor15 := (select id from data where topic= "sensor15" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor16 := (select id from data where topic= "sensor16" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor17 := (select id from data where topic= "sensor17" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor18 := (select id from data where topic= "sensor18" ORDER BY create_at DESC LIMIT 0,1);' +
            'set @sensor19 := (select id from data where topic= "sensor19" ORDER BY create_at DESC LIMIT 0,1);' +
            '(select * from data where id=@sensor1) ' +
            'UNION (select * from data where id=@sensor2) ' + 
            'UNION (select * from data where id=@sensor3) ' +
            'UNION (select * from data where id=@sensor4) ' +
            'UNION (select * from data where id=@sensor5) ' +
            'UNION (select * from data where id=@sensor6) ' +
            'UNION (select * from data where id=@sensor7) ' +
            'UNION (select * from data where id=@sensor8) ' +
            'UNION (select * from data where id=@sensor9) ' +
            'UNION (select * from data where id=@sensor10) ' +
            'UNION (select * from data where id=@sensor11) ' +
            'UNION (select * from data where id=@sensor12) ' +
            'UNION (select * from data where id=@sensor13) ' +
            'UNION (select * from data where id=@sensor14) ' +
            'UNION (select * from data where id=@sensor15) ' +
            'UNION (select * from data where id=@sensor16) ' +
            'UNION (select * from data where id=@sensor17) ' +
            'UNION (select * from data where id=@sensor18) ' +
            'UNION (select * from data where id=@sensor19);'
    }
        conexion.query(query, (error, results) => {
          if (error) throw error
          else{
            callback(results)
          }
        })
    } 

module.exports = {getData,getLastPhByTanque}