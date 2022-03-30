import React from "react"
import { Link } from "react-router-dom"



function Item({ producto }) {
    return (
        <div className='col-md-4 p-1'>
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${producto.name} - ${producto.categoria}`}
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt='' className='w-50' />
                    {producto.price}                                                            
                </div>

                <div className="card-footer">  
                    <Link to={`/detalle/${producto.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>                                                                                                                  
                    </Link>                                                      
                </div>
            </div>
        </div> 
    )
}

export default Item
