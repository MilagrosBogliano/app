import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ name, thumbnail, price, id, stock }) => {
    const onAdd = (qty) => {
      alert(`Has agregado ${qty} Mallas`);
    };
  
    return (
      <div className="product-card">
        <img className="product-card__image" src={thumbnail} alt="" />
  
        <h3 className="product-card__name">{name}</h3>
        <span className="product-card__name">${price}</span>
  
        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </div>
    );
  };


export default Item