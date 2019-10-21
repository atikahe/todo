const express = require('express'); //calling the routing framework
const api = express(); //initializing the routing tool

api.use(express.static(__dirname + '/public')); //to access the index.html in public folder

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
