import React from 'react';
import ImgCart from './cart.svg';
function CartWidget() {
  return (
    <div>
        <img src={ImgCart} alt="Carrito" />
    </div>
  )
}

export default CartWidget