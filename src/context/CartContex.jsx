import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) { //componente
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ])
    }

    const removeCart = () => {
        setCartList([])
    }

    const precioTotal = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }
    
    
    // función que calcule el cantidad de productos
    const cantidadTotalItem = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)// acum = acum + cantidad
    }

    
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            precioTotal,
            cantidadTotalItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
