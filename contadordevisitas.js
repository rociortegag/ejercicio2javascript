/*Este es mi contador de visitas: María del Rocío Ortega Guerrero. Al ejecutarlo con google chrome me da el error de sumar 
 * de dos en dos las visitas mientras que si lo ejecuto en monzilla firefox se realiza la suma de las visitas
 * de forma correcta. Si se soluciona el problema para google chrome falla en el monzilla firefox.*/
var http=require('http');
/*Declaraamos la variable que contara las visitas*/
var contadorvisitas=0;
http.createServer(function (req, res) {
    //Añadimos visitas cada vez que se cargue la pagina web//
contadorvisitas++;
res.writeHead(200, {'Content-Type': 'text/plain'});
//Se escribe el numero de visitas por pantalla//
res.write('El numero de visitas es:' +contadorvisitas);
res.end();
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
