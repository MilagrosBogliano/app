import React from 'react';
import ItemList from '../Item/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
function ItemListContainer({greeting}) {
  return (
    <div>
      <h1>{greeting}</h1>

      <ItemDetailContainer/>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer