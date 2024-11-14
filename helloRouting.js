const http = require('http');
const port = 5000;
//
// function index (request, response){
//     response.writeHead(200);
//     response.end('Que procede');
// }
//
// http.createServer(function(request, response){
//     if(request.url ==='/'){
//         return index(request, response);
//     }
//     response.writeHead(404);
//     response.end(http.STATUS_CODES[404]);
// }).listen(1337)

//ROUTING
var routes = {
    '/' : function index (request, response){
        response.writeHead(200);
        response.end('procede');
    },
    '/foo':function foo (request, response){
        response.writeHead(200);
        response.end('cambiar el foo y que tanto procede')
    }
}

//TWO ROUTES IN AN OBJECT
http.createServer(function(request, response){
    if(request.url in routes){
        return routes[request.url](request, response)
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(process.env.PORT || port);

console.log('Server running at http://localhost:'+port)