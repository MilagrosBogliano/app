import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Item/ItemList'
import {collection, getDocs, getFirestore,query, where} from 'firebase/firestore'

function ItemListContainer({greeting}) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(()=>{
        const querydb = getFirestore()
        const queryCollection = collection(querydb,'products')
        const queryFilter = categoriaId ?
                                query(queryCollection, where('category', '==', categoriaId))
                              : 
                                queryCollection
  
        getDocs(queryFilter)
        .then(resp=> setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch((err)=> console.log(err)) 
        .finally(()=> setLoading(false)) 
  
      }, [categoriaId])

    return (
        <div>
            {   loading ? 
                    <div>Cargando productos...</div> 
                    : productos.map((prod)=>{
                        return (
                            <ItemList key={productos.id} data={productos}/>
                        );
                        })                
            
            }          

        </div> 
    )
}

export default ItemListContainer
