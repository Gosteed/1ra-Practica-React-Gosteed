function Producto({img, nom, precio}){
  return(
    <>
      <div class="pro">
        <h1>{nom}</h1>
        <img src={img} alt="productoimg"/>
        <h2>{precio}</h2>
      </div>
    </>
  )
}

export default Producto