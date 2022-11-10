var net = require('net');

var server = net.createServer(function(connection){

    console.log('Cliente conectado');

    connection.on('end', function(){
        console.log('Cliente desconectado');
    });

    connection.write('Bienvenido');
    connection.pipe(connection);
});

server.listen(8080, function(){
    console.log('El servidor esta escuchando');
})