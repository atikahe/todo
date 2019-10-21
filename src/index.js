const express = require('express'); //calling the routing framework
const api = express(); //initializing the routing tool

api.listen(3000, () => {
  console.log('API up and running!');
});

api.get('/', (req,res) => {
  console.log(req);
  res.send('Hello wurld');
});
