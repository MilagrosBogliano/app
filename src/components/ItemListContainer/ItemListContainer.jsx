import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../Item/ItemList'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {Button} from 'react-bootstrap'

function ItemListContainer({greeting}) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [bool, setBool] = useState(true)

  const { categoriaId } = useParams()
useEffect(()=>{
    const querydb = getFirestore() 
    const queryCollection = collection(querydb, 'productos')

    getDocs(queryCollection)
    .then(resp => setProductos( resp.docs.map(item => ( { id: resp.id, ... resp.data() } ) ) ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false)) 
     }, [])
console.log(productos)
  
  const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
}

const handleAgregar=()=>{
    setProductos([
        ...productos,
        { id: '6' ,categoria: 'Enterizas', name: "Enteriza Blanca", price: 25000, foto:'https://i.pinimg.com/474x/0c/16/db/0c16db97f13c94eb1b357dbea1c93bd5.jpg', stock:'10' }
    ])
}


   
    return (
        <div>
          {greeting}<hr />
            <Button onClick={handleClick}>Cambiar estado </Button>           
            <Button onClick={handleAgregar}>Agregar Item </Button>

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
