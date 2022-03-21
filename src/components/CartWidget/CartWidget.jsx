import React from 'react';
import ImgCart from './cart.svg';
function CartWidget() {
  return (
    <div>
      <img src={ImgCart} width="90" height="90" alt="Carrito" />
    </div>
  )
}

export default CartWidget