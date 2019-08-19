const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/sisboat'));

app.get('/*', function(request, response){
  response.sendFile(__dirname + '/dist/sisboat/index.html');
}); 

app.listen(process.env.PORT ||4200);
