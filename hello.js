//1 Hello world HTTP server
const http = require('http'); // Loads the http module
http.createServer(( request, response) => {
    // 1. tel the browser everythung is OK (status 200), and the data us plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 2. Write the announceed text to the body of the page
    response.write('Hello, Worls!\n')
    // 3. Tell the server that all of of the response header and body have been sent
}).listen(1337); // 4. Tells the server what port to be on