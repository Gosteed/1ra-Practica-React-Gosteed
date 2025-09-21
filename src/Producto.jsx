function Producto({img, nom, precio, desc}){
  return(
    <>
      <div className="pro">
        <h1>{nom}</h1>
        <img src={img} alt="productoimg"/>
        <h2>{precio}</h2>
        <p>{desc}</p>
        <a href="https://es.react.dev"><button>Comprar</button></a>
      </div>
    </>
  )
}

export default Producto