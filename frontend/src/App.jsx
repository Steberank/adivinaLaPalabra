import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Rowcontainer from './components/Rowcontainer.jsx'
import Square from './components/Square.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
    <Navbar />
      <div className='board-container'>
      {/*Aqui deberia ir lo que le pedi a Claude */}
      </div>
    </div>
  )
}

export default App;