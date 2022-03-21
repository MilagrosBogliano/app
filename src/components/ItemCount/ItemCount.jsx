import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

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
    </>
  )
}

export default ItemCount