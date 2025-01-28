//node client.js
const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 4000,
    host: '127.0.0.1',
}

const client = net.createConnection(options);

client.on('connect', () => {
    console.error('Conexion Satisfactoria');
    sendLine();
})

client.on('data', (data) => {
    console.log('El servidor dice ' + data);
    sendLine();
})

client.on('error', (err) => {
    console.error(err.message);
})

function sendLine() {
    let line = readline.question("\ndigite algo: \n")
    if(line=='0'){
        client.end()
    }else{
        client.write(line)
    }
}

