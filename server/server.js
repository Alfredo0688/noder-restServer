const express = require('express')
const app = express()

//cuando ejecutemos este archivo, lo primero que hará es leer esta linea e ir a config, alli asignará el puerto.
//si es en ambiente de produccion usará el que está en process.env.PORT , si está en ambiente de desarrollo usará el 3000
require('./config/config');


//lista de los diversos verbos http
//cambiamos res.send por res.json para enviar objetos
app.get('/usuario', function(req, res) {
    res.send('metodo get')
})

app.post('/usuario', function(req, res) {
    res.send('metodo post')
})

//ejemplo de como podriamos solicitar peticiones de un usuario mandando el id como parametro desde la interfaz o navegador
//:id es el parametro recibido desde la interfaz o navegador
app.put('/usuario/:id', function(req, res) {

    //con res.params.id obtengo ese parametro
    let id = req.params.id;
    //res.send('metodo put')

    //retorno como respuesta el id obtenido
    res.json({
        //recordemos que ecma6 podriamos tan solo colocar 'un id' sin necesidad de poner 'id:id'
        id: id
    })
})

app.patch('/usuario', function(req, res) {
    res.send('metodo patch')
})

app.delete('/usuario', function(req, res) {
    res.send('metodo delete')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000');
})