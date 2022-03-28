import {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail"
import { getFetch, getFetchOne } from '../../helpers/getFetch'

function ItemDetailContainer() {
  const [producto, setProducto] = useState( {} )

  // usar useParam => detalleId

  useEffect(()=> {
    getFetchOne    
    .then(resp => setProducto(resp) )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer
