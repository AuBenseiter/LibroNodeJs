const tls = require('tls');
const fs = require('fs');
const https = require('https');
const PORT = 1337;
//const HOST = '127.0.0.1';

const options = {
    key: fs.readFileSync('mykey.pem'),
    cert: fs.readFileSync('my-cert.pem'),
};

const server = tls.createServer(options, (socket) => {
    console.log('Cliente conectado');

    socket.write("Mensaje desde el servidor.");

    socket.on('data', (data) => {
        console.log('Recibido: %s [de %d bytes]', data.toString().trim(), data.length);
    });

    socket.on('end', () => {
        console.log('Fin de la transmisión');
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}`);
});

server.on('error', (error) => {
    console.error('Error del servidor:', error);
});
