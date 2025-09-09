// backend/src/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en las requests

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando");
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
