import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
function ItemDetail({ productos }) {
  const [count, setCount] = useState(0)

  function onAdd(cant){
      setCount(cant)     
  }
    return (
      <>
        <img src={productos.foto} className="W-25"/>
        <div>{productos.name}</div>
        <div>{productos.price}</div>
        <ItemCount init={1} stock={10} onAdd={onAdd} />
      </>
    )
  }
  export default ItemDetail
  