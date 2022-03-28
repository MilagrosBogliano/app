import React from "react"
function ItemDetail({ producto }) {
    return (
      <>
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        {/* <div>{producto.descripcion}</div> */}
      </>
    )
  }
  export default ItemDetail
  