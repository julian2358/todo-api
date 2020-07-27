const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'todo' 
   });

   try {
    connection.connect();
   } catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
   }

//port listening
const api = express();
api.use(express.static(__dirname));
api.use(bodyParser.json());
console.log(__dirname) 

api.listen(2000, () => {
  console.log('API up and running!');
});

//routes

api.post('/add', (req, res) => {
    console.log(req.body);
    
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
     if (error) return res.json({ error: error });
   connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
      if (error) return res.json({ error: error });
   console.log(results[0]['LAST_INSERT_ID']);
     });
    });
   });