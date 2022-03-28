import React from 'react'
import { useState , useEffect } from 'react';
import Item from './Item';
const ItemList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProducts);
      }, 2000);
    });
    useEffect(() => {
        getProducts
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
      }, []);

      return (
        <div>
          {products.length ? ( 
              <>
                {products.map((product) => {
                    return (
                      <div key={product.id}>
                        <Item
                          name={product.name}
                          thumbnail={product.thumbnail}
                          price={product.price}
                          stock={product.stock}
                          id={product.id}
                        />
                      </div>
                    );
                  })
                }
              </>
            ) : (
              <p>Cargando productos...</p>
            ) 
          }
          
        </div>
      );
    };

export default ItemList