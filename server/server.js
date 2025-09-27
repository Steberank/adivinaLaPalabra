require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta del archivo JSON
const palabrasPath = path.join(__dirname, 'db', 'palabras.json');
// Si después querés letras en JSON:
const letrasPath = path.join(__dirname, 'db', 'letters.json');

app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando',
    endpoints: ['/palabra', '/letter']
  });
});

app.get('/palabra', (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  fs.readFile(palabrasPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error leyendo la base de datos de palabras' });
    }

    const palabras = JSON.parse(data);
    const todayWords = palabras.filter(p => p.fecha === today);

    res.json({ solutions: todayWords });
  });
});

app.get('/letter', (req, res) => {
  fs.readFile(letrasPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error leyendo la base de datos de letras' });
    }

    const letters = JSON.parse(data);
    res.json({ data: letters });
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- Red: http://0.0.0.0:${PORT}`);
  console.log(`Accesible desde cualquier dispositivo en la red local`);
});
