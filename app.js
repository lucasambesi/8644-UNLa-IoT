const mysql =  require('mysql')
const mqtt = require ('mqtt')

var con = mysql.createConnection({
  host:'localhost',
  user:'grupo2',
  password:'clave',
  database:'db-pp-unlaiot'
})

con.connect(function (err){
  if (err) throw err
  console.log("Conexion a MySQL OK")
})

var options = {
  connectTimeout : 4000,
  clientId : 'dbConexion',
  keeplive: 60,
  clean: true,
}

var WebSocket_URL = 'ws://35.198.31.198:8083/mqtt'
var client = mqtt.connect(WebSocket_URL,options);

client.on('connect', () => {
  console.log('Mqtt conectado por WS')

  client.subscribe("+/#", function(err){
    console.log("Suscripcion exitosa a todos los topicos")
  })
});

client.on('message',function(topic,message){
  console.log("Topico: "+ topic + " / Mensaje: " + message.toString())
  
  let query = "INSERT INTO `data` (`topic`, `mensaje`, `create_at`) VALUES (" + topic + "," +message.toString() + ", CURRENT_TIMESTAMP(6).000000)"
  con.query(query,function(err,result,fields){
    if(err) throw err
    else console.log("Insert exitoso: " + result);
  })
})