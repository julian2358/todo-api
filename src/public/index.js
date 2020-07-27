const express = require('express');
//port listening
const api = express();
api.listen(4000, () => {
  console.log('API up and running!');
});

// routes
api.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, world!');
  });