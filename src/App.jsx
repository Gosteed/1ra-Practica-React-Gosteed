import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import Producto from './Producto.jsx'

function App() {

  return (
    <>
      
      <NavBar />
      <div className="todo">
        <h1>Productos</h1>
        <div className="pros">
        <Producto 
          nom="Play Station 5" 
          img="src/assets/play5.jpg" 
          precio="$500usd"
          desc="Consola de última generación con gráficos avanzados y gran catálogo de juegos."
        />
        <Producto 
          nom="iPhone 14" 
          img="src/assets/iphone14.jpg" 
          precio="$900usd"
          desc="Smartphone de alta gama con cámara avanzada y excelente rendimiento."
        />
        <Producto 
          nom="Notebook Dell" 
          img="src/assets/dell.jpg" 
          precio="$1200usd"
          desc="Portátil potente ideal para trabajo y entretenimiento, con pantalla Full HD."
        />
        <Producto 
          nom="Auriculares Sony WH-1000XM4" 
          img="src/assets/sony.jpg" 
          precio="$350usd"
          desc="Auriculares inalámbricos con cancelación de ruido y sonido premium."
        />
        <Producto 
          nom="Celular Samsung" 
          img="src/assets/samsung.jpg" 
          precio="$300usd"
          desc="Teléfono inteligente con gran pantalla y batería de larga duración."
        />
        <Producto 
          nom="Smartwatch Xiaomi" 
          img="src/assets/xiaomi.jpg" 
          precio="$150usd"
          desc="Reloj inteligente con monitoreo de salud y notificaciones."
        />
        <Producto 
          nom="Tablet Lenovo" 
          img="src/assets/lenovo.jpg" 
          precio="$250usd"
          desc="Tablet versátil para estudio, trabajo y entretenimiento."
        />
        <Producto 
          nom="Monitor LG 27''" 
          img="src/assets/lg.jpg" 
          precio="$400usd"
          desc="Monitor de alta resolución ideal para diseño y gaming."
        />
      </div>
      </div>
    </>
  )
}

export default App
