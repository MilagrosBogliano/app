import {useCartContext} from '../../context/CartContex'
import ItemCount from '../ItemCount/ItemCount'
function ItemDetail({ productos }) {
 // const [count, setCount] = useState(0)
  const {addToCart, cartList} = useCartContext()

  function onAdd(cant){
     // setCount(cant)     
     addToCart({...productos, cantidad: cant})
  }
    return (
      <>
         <div className='card w-50'>
                        <div className="container">
                            <label>{productos.name}</label>
                        </div>
                        <div className="container">
                            <img  src={productos.foto} className="w-25" alt="foto" />
                            <br/>
                            <label>{productos.categoria}</label>
                        </div>
                        <div className="container">
                            <label>{productos.price}</label>
                        </div>
                        <ItemCount initial={1} stock={productos.stock} onAdd={onAdd} /> 
                    </div>

       
      </>
    );
  }
  export default ItemDetail
