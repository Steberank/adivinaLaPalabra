require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Conexión a MySQL usando variables de entorno de Railway
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Test de conexión
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error conectando a la BD:', err);
  } else {
    console.log('✅ Conectado a la base de datos MySQL');
    connection.release();
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando',
    endpoints: ['/palabra', '/letter']
  });
});

// Endpoint para palabras del día
app.get('/palabra', (req, res) => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const sql = 'SELECT * FROM palabras WHERE fecha = ?';
  db.query(sql, [today], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error consultando la base de datos de palabras' });
    }

    res.json({ solutions: results });
  });
});

// Endpoint para letras
app.get('/letter', (req, res) => {
  const sql = 'SELECT * FROM letters';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error consultando la base de datos de letras' });

    res.json({ data: results });
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- Red: http://0.0.0.0:${PORT}`);
});
