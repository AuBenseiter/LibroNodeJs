//node server.js
const  net = require('net');
const readline = require('readline-sync');

const server = net.createServer();


server.on('connection', (socket) => {
    console.log("Nuevo cliente conectado");
    socket.on('data', (data) => {
        console.log("\nMensaje recibido desde el cliente: " + data);
        sendLine(socket);
    });
    socket.on('close', () => {
        console.log("Comunicacion finalizada");
    });
    socket.on('error', (err) => {
        console.log("mensaje de error: " + err.message);
    });
});
server.listen(4000, () => {
    console.log('Server started on port: ', server.address().port);
});
//OPCIONAL
//se ocupa socket por que es servidor
//el soket representa una conexion activa unica para cada cliente
function sendLine(socket) {
    let line = readline.question("\ndigite algo: \n")
    if(line=='0'){
        console.log("Finalizando comunicación...");
        socket.end()
    }else{
        socket.write(line)
    }
}