import React from 'react';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const [condicionBoton, setCondicionBoton] = useState(true)

  
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
      setCondicionBoton(false)
  }
  
  return (
    <div>
        <section>
            <Button  variant="dark"onClick={(Restar)} disabled={count === initial ? true : null}> 
                -
            </Button>
            <span>  {count}  </span>
            <Button variant="dark" onClick={(Sumar)} disabled={count === stock ? true : null} > 
                + 
            </Button>
            {condicionBoton ? 
                <Button variant="dark" onClick={(onAdd)} disabled={stock === 0? true : null}>
                    Agregar
                </Button>
            : 
            <>
            <Link to='/'>
                    <Button variant="dark">Seguir Comprando</Button> 
                </Link>
                <Link to='../Cart/Cart.jsx'>
                    <Button variant="dark">Terminar Compra</Button> 
                </Link>
            </>
            }
        </section>
    </div>
  )
}

export default ItemCount