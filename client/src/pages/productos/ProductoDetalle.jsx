import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductoDetalle = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
            setProducto(respuesta.data);
        }
        getData();
    }, [id])

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Detalle de la Producto
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: {producto.nombre}</h5>
                    <p className="card-text">La Producto tiene un precio de {producto.price}  y su descripcion es {producto.description}</p>
                    <Link className="btn btn-primary" to="/productos">Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductoDetalle;