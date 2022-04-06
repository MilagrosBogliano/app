import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import CartContextProvider from '../context/CartContex'

function RoutesApp()  {
 
    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar  />          
                <Routes>
                    <Route 
                        path="/" 
                        element={<ItemListContainer 
                            greeting='Hola soy ItemListContainer' 
                            
                        />} 
                    />   
                    <Route 
                        path="/categoria/:categoriaId" 
                        element={<ItemListContainer 
                            greeting='Hola soy ItemListContainer' 
                        />} 
                    />                            
                    <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
                    <Route path="/*" element={<Navigate to='/' replace/> } />
                    
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default RoutesApp
