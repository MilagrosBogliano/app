import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(1);
  
    function Sumar(){
      if (count<stock) {
          setCount(count + 1)            
      }
  }
  function Restar(){
      if (count>initial) {
          setCount(count - 1)            
      }
  }
  function onAdd(){
      onAdd(count)
      setCount(1)
  }
  
  return (
    <>
         <Button variant="dark" onClick={(Restar)}>
            -
        </Button> 
        {count}
        <Button variant="dark" onClick={(Sumar)}>
            +
        </Button>
        <Button variant="dark" onClick={(onAdd)}>
          Añadir
        </Button>
        : 
        <>
            <Link to='/'>
                <button>Seguir Comprando</button> 
            </Link>
            <Link to='/cart'>
                <button>Terminar Compra</button> 
            </Link>
        </>
    </>
  )
}

export default ItemCount