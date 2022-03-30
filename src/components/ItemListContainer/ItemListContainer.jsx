import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Item/ItemList'
import { getFetch } from '../../helpers/getFetch'

function ItemListContainer({greeting}) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(()=> {
        if (categoriaId) {
            getFetch 
            .then(resp => setProductos(resp.filter(item => item.categoria === categoriaId)) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
            
        } else {            
            getFetch 
            .then(resp => setProductos(resp) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))            
        }
    }, [categoriaId])

    const getFetchApi = async () => {
        try {
            const query = await fetch('/assets/DATA.json')// por defecto va un verbo tipo get
            const queryParse = await query.json()
            console.log(queryParse)
        } catch (error) {
            console.log(error)
        }
        
    }



    useEffect( ()=>{
        getFetchApi()
    }, [])




    console.log(categoriaId)
    return (
        <div>
            {greeting}<hr />
            {   loading ? 
                    <h2>Cargando...</h2>
                : 
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <ItemList productos={productos} />
                    </div>                   
            
            }          

        </div> 
    )
}

export default ItemListContainer
