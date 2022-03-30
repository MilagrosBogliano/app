import {useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch, getFetchOne } from '../../helpers/getFetch'

function ItemDetailContainer() {
  const [producto, setProducto] = useState( {} )

  // usar useParam => detalleId

  useEffect(()=> {
    getFetchOne    
    .then(resp => setProducto(resp) )
    .catch(err => console.log(err))
}, [])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer
