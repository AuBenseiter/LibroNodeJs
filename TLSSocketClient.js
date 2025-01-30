const tls = require('tls');
const fs = require('fs');
const PORT = 1337;
//const HOST = '127.0.0.1';

const options = {
    key: fs.readFileSync('mykey.pem'),
    cert: fs.readFileSync('my-cert.pem'),
    rejectUnauthorized: false,
};

const client = tls.connect(PORT, options, () => {
    if (client.authorized) {
        console.log("Conexión autorizada por una Autoridad Certificadora.");
    } else {
        console.log("Conexión no autorizada:", client.authorizationError);
    }

    client.write("Mensaje desde el cliente.");
});

client.on('data', (data) => {
    console.log('Recibido: %s [de %d bytes]', data.toString().trim(), data.length);
    client.end();
});

client.on('close', () => {
    console.log("Conexión cerrada");
});

client.on('error', (error) => {
    console.error('Error del cliente:', error);
    client.destroy();
});
