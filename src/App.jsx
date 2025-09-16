import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import Producto from './Producto.jsx'

function App() {

  return (
    <>
      
      <h1>Productos</h1>
      <div className="todo">
      <NavBar />
      <Producto nom="Play Station 5" img="src/assets/play5.jpg" precio="$500usd"/>
      <Producto nom="Play Station 5" img="src/assets/play5.jpg" precio="$500usd"/>
      <Producto nom="Play Station 5" img="src/assets/play5.jpg" precio="$500usd"/>
      </div>
    </>
  )
}

export default App
