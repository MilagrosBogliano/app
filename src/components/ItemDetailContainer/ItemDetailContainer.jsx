import React from "react"
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import {doc,getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer() {
    const [productos, setProducto] = useState( {} )
    const [loading, setLoading]= useState(true)

    const {prodId} = useParams()

    useEffect(()=>{
      const querydb = getFirestore()
      const queryProd = doc(querydb, 'products', prodId)
    
      getDoc (queryProd)
      .then(resp=> setProducto(resp.find(prod => prod.id === prodId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [])
    
 
return(
    <>
    { 
      loading ?  
            <p>Cargando producto...</p>
          :
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <ItemDetail key={productos.id} product = {productos}/>
            </div>
    }
    </>
)

}

export default ItemDetailContainer
