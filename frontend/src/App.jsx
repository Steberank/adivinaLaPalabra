import { useEffect, useState } from 'react';
import './App.css'
import Wordle from './components/Wordle.jsx'
import Grid from './components/Grid.jsx';

function App() {
  const [solution, setSolution] = useState(null);

useEffect(() => {
  const API_URL = import.meta.env.VITE_API_URL;

  fetch(`${API_URL}/palabra`)
    .then(response => response.json())
    .then(data => {
      if (data.solutions && data.solutions.length > 0) {
        
        setSolution(data.solutions[0].palabra.toLowerCase());
      } else {
        console.warn("No hay palabras para hoy");
        setSolution("lugar"); // o algún valor por defecto
      }
    })
    .catch(error => console.error("Error al obtener la palabra:", error));
}, []);

  return (
    <div className="App">
      <h1>Adivina la Palabra!</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App