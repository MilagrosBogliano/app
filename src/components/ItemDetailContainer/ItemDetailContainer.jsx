import {useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch, getFetchOne } from '../../helpers/getFetch'

function ItemDetailContainer() {
  const [productos, setProducto] = useState( {} )



  useEffect(()=> {
    getFetchOne   
    .then(resp => setProducto(resp) )
    .catch(err => console.log(err))
}, [])

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  )
}

export default ItemDetailContainer