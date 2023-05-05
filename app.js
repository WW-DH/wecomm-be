const express = require('express');
const app = express();
  
app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
var server = app.listen(3005, () => {
  var port = server.address().port;
  
  console.log('Server is working : PORT - ', port);
});