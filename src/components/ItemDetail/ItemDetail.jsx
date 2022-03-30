import React from "react"
function ItemDetail({ productos }) {
    return (
      <>
        <div>{productos.name}</div>
        <div>{productos.price}</div>
      </>
    )
  }
  export default ItemDetail
  