require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'palabras_db',
  port: process.env.DB_PORT || 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando',
    endpoints: ['/palabra', '/letter']
  });
});

app.get('/palabra', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const query = 'SELECT id, palabra, fecha FROM palabras WHERE DATE(fecha) = ?';
  
  connection.query(query, [today], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las palabras' });
    }
    
    res.json({ solutions: results });
  });
});

app.get('/letter', (req, res) => {
  const query = 'SELECT * FROM letras';
  
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las letras' });
    }
    
    res.json({ data: results });
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- Red: http://0.0.0.0:${PORT}`);
  console.log(`Accesible desde cualquier dispositivo en la red local`);
});