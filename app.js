const port  = process.env.PORT || 3000;

const express = require ('express')
const app = express()

//Imports rutas
const RouteDefault = require('./routers/default') 

app.use('/', RouteDefault)

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.use(express.static(__dirname + '/public'))

app.use('/', RouteDefault)

app.listen(port , () => {
  console.log('Servidor escuchando en puerto: ', port)
})