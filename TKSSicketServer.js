'use strict';

//IMPORTACIONES Y CONFIGURACIONES
var tls = require('tls');   //protocolos TLS/SSL
var fs = require('fs');     //Permite leer y escribir archivos en el sist.
const PORT = 1337;      //PUERTO
const HOST = '127.0.0.1'    //IP

//OPCIONES PARA TLS
//readFileSync read both files sincronamente
var options = {
    key: fs.readFileSync('private-key.pem'), //Private key encrip, almacenada in private...
    cert: fs.readFileSync('public-cert.pem') //Public certificate that auth server
};

//CREACION DEL SERVIDOR
//tls.createServer Crea el servidor utilizando 'options'
var server = tls.createServer(options, function(socket) {
// Send a friendly message to client when the conextion is ok
    socket.write("I am the server sending you a message.");
// Print the data that we received of client
    socket.on('data', function(data) {
        console.log('Received: %s [it is %d bytes long]',
        data.toString().replace(/(\n)/gm,""), //conv binary to readable text & del line break
        data.length); //show recive data
    });
// Let us know when the transmission is over
    //Notify off conextion
    socket.on('end', function() {
        console.log('EOT (End Of Transmission)');
    });
});

//CONFIGURACION PARA ESCUCHAR CONEXIONES
// Start listening on a specific port and address
server.listen(PORT, HOST, function() {          //Do that server listen the port and host
    console.log("I'm listening at %s, on port %s", HOST, PORT);
});

//MANEJO DE ERRORES
// When an error occurs, show it.
server.on('error', function(error) { // Handle errors que occur on the server
    console.error(error);
// Close the connection after the error occurred.
    server.destroy(); //cierra el servidor despues de un error
});