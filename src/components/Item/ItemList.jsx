import React from 'react'

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
    useEffect(() => {
        getProductsFromDB();
      }, []);

      return (
        <div className="product-list-container">
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