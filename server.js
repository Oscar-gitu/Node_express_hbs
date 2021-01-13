const express = require('express')
const app = express()
const hbs = require('hbs');
const path = require('path');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//Le indicas que carpeta estara estatica, en este caso la carpeta publica , donde podran ver todos los archivos que estan dentro
//si se encuentra el archivo index dentro de public ira sobre ese
app.use(express.static(__dirname + '/public'))

// ES COMO CREAR MODULOS EN REACT , SOLO QUE LE INDICAS DONDE PONDRAS TODO CON EXTENSION HBS
hbs.registerPartials(path.join(__dirname, 'views/parciales'));

//Sirve para crear renderizados de templates en este caso utilizando hbs
app.set('view engine', 'hbs');


//app.set('view engine', 'html');
//app.engine('html', require('hbs').__express);

//se utiliza render cuando utilizas views
app.get('/', function (req, res) {

    res.render('home', {
        nombre: "oscar",
        anio: new Date().getFullYear()
    })

})

app.get('/about', function (req, res) {

    res.render('about', {
        nombre: "oscar",
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log('Escuchando en el puerto ' + port)
})


//Manera normal de crear una middleware, si utilizas express es forzoso crear de esta manera la navegacion
// app.get('/', function (req, res) {

//     let json = {
//         name: 'Oscar',
//         edad: 27,
//         url: req.url
//     }

//     res.send(JSON.stringify(json))

    //sino utilizas hbs en ves de res.render se utiliza res.sendfile
    // res.sendFile(path.join(__dirname+'/views/index-old.html'));

// })