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
    <Rowcontainer>
      <Square id={0} row={0}/>
      <Square id={1} row={0}/>
      <Square id={2} row={0}/>
      <Square id={3} row={0}/>
      <Square id={4} row={0}/>

      <Square id={0} row={1}/>
      <Square id={1} row={1}/>
      <Square id={2} row={1}/>
      <Square id={3} row={1}/>
      <Square id={4} row={1}/>

      <Square id={0} row={2}/>
      <Square id={1} row={2}/>
      <Square id={2} row={2}/>
      <Square id={3} row={2}/>
      <Square id={4} row={2}/>

      <Square id={0} row={3}/>
      <Square id={1} row={3}/>
      <Square id={2} row={3}/>
      <Square id={3} row={3}/>
      <Square id={4} row={3}/>

      <Square id={0} row={4}/>
      <Square id={1} row={4}/>
      <Square id={2} row={4}/>
      <Square id={3} row={4}/>
      <Square id={4} row={4}/>

      <Square id={0} row={5}/>
      <Square id={1} row={5}/>
      <Square id={2} row={5}/>
      <Square id={3} row={5}/>
      <Square id={4} row={5}/>
    </Rowcontainer>
    </div>
  )
}

export default App
