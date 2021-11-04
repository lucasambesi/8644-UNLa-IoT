const mysql =  require('mysql')

var conexion = mysql.createConnection({
  host:'localhost',
  user:'grupo2',
  password:'clave',
  database:'db-pp-unlaiot'
})

conexion.connect(function (err){
  if (err) throw err
  console.log("Conexion a MySQL establecida!")
})

module.exports = conexion