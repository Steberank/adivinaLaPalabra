import { useEffect, useState } from 'react';
import './App.css'
import Wordle from './components/Wordle.jsx'
import Grid from './components/Grid.jsx';

function App() {
  const [solution, setSolution] = useState(null);

useEffect(() => {
  const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : `http://${window.location.hostname}:3000`;
    
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