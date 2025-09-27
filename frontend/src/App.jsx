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
    .then(data => setSolution(data.solutions[0].palabra));
}, []);
  return (
    <div className="App">
      <h1>Adivina la Palabra!</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App