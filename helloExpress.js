//Import the top-level funcion of express
//Remember: npm install express
const express = require('express');

//Create an Express application using the top level function
const app = express();

//Define por number as 3000
const port = 3000;

//Routes HTTO GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response){
    response.send('Que procede manito')
});

//Make the app listen on port 3000
app.listen(port, function(){
    console.log('Server listening on http://localhost:' + port);
})