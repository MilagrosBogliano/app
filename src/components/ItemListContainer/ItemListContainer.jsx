import React from 'react';
import ItemList from '../Item/ItemList';

function ItemListContainer({greeting}) {
  return (
    <div>
        <h1>{greeting}</h1>

        <ItemList/>
    </div>
  )
}

export default ItemListContainer