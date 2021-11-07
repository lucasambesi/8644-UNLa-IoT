const port  = process.env.PORT || 3000;
const express = require ('express')
const app = express()

//Imports rutas
const RouteDefault = require('./routers/default') 

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.use('/', RouteDefault)

app.listen(port , () => {
  console.log('Servidor escuchando en puerto: ', port)
})

app.use((req,res,next) => {
  res.status(404).render('404', {titulo : 'Dashboard PP UNLa', tituloHead:'ERROR 404', error: 'acesso erroneo'})
}) 