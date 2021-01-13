
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });

    let json = {
        name: 'Oscar',
        edad: 27,
        url: req.url
    }

    res.write(JSON.stringify(json))
    res.end();
}).listen(8080);

console.log('escuando en el puerto 8080')