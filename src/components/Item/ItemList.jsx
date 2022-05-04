import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
  ({ productos })=> {
        return (
            <>
                {productos.map((productos)=>   <Item key={productos.id} producto={productos} /> )}
            </>
        )
    }
, (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length ) 

export default ItemList
