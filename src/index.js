const express = require('express'); //calling the routing framework
const api = express(); //initializing the routing tool
const bodyParser = require('body-parser');

api.use(express.static(__dirname + '/public')); //to display index.html
api.use(bodyParser.json()); //extract the entire BODY PORTION of an INCOMING REQUEST stream and exposes it on req.body

api.post('/add', (req, res) => {
  console.log(req.body);
  res.send('it works!');
});

api.listen(3000, () => {
  console.log('API up and running!');
});

// api.get('/', (req,res) => {
//   console.log(req);
//   res.send('Hello wurld');
// });

// api.use((req,res,next) => {
//   console.log('Hello');
//   next();
// })
