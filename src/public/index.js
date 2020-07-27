const bodyParser = require('body-parser');
const express = require('express');
//port listening
const api = express();
api.use(express.static(__dirname));
api.use(bodyParser.json());
console.log(__dirname) 

api.listen(4000, () => {
  console.log('API up and running!');
});

//routes

api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works!');
   });


// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
//   });

