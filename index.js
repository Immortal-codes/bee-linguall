const express = require('express');
const path = require('path')

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

//app.get('/', (req,res)=>{
//   res.send("Hello world");
//})

app.listen(port);
console.log('Server started at http://localhost:' + port);
