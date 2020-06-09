let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('¡Hola Mundo!');
}).listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
});