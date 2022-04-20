import { useCartContext } from "../../context/CartContex";
import { addDoc, collection, documentId, getDocs, getFirestore, query,  where, writeBatch } from 'firebase/firestore';
import {Button} from 'react-bootstrap';
function Cart() {   

    const { cartList, removeCart, precioTotal } = useCartContext()

    const generarOrden = async (e) => {
        e.preventDefault();
   
            let orden = {}      
        
            orden.buyer = { name: 'Milagros', email: 'Milagrosb@gmail.com', phone: '2013369512' }
            orden.total = precioTotal()
        
            orden.items = cartList.map(cartItem => {
                const id = cartItem.id
                const nombre = cartItem.name
                const precio = cartItem.price * cartItem.cantidad
                
                
                return {id, nombre, precio}   
            })   

            const db = getFirestore() 
            const queryCollection = collection(db, 'orders')
            await addDoc(queryCollection, orden)
            .then(({id}) => console.log( id ))
            
            const queryCollectionStock = collection(db, 'productos')

            const queryActulizarStock = await query(
                queryCollectionStock,  
                where( documentId() , 'in', cartList.map(it => it.id) )         
            )

            const batch = writeBatch(db)

            await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                  stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) ))
            .finally(()=> console.log('actulalizado'))

            batch.commit()
    }


    return (
        <div>
            {cartList.map(productos => <li key={productos.id} > nombre: {productos.name} - cantidad: {productos.cantidad} </li>)}
            <Button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</Button>
            <Button className="btn btn-outline-warning" onClick={generarOrden}>Generar orden</Button>
        </div>
    )
}

export default Cart
