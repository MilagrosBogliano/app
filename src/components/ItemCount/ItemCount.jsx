import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [qty, setQty] = useState(initial);
  
    const addProduct = (num) => {
      setQty(qty + num);
    };
  return (
    <>
         <Button variant="dark" onClick={() => addProduct(-1)} disabled={qty === initial ? true : null}>
            -
        </Button> 
        <span>{qty}</span>
        <Button variant="dark" onClick={() => addProduct(+1)} disabled={qty === stock ? true : null}>
            +
        </Button>
        <Button variant="dark" onClick={() => onAdd(qty)} disabled={stock === 0 ? true : null}>
            Añadir
        </Button>
    </>
  )
}

export default ItemCount