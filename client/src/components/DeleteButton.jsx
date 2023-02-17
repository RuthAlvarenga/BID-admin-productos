import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';

const DeleteButton = ({id_producto, successCallback}) => {

    const eliminarProducto = async (productoID) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/product/${productoID}`);
            successCallback(productoID);
        
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error:  ${error?.response?.data?.message || error.message}`,
            })
        }

    }

    const confirmarEliminar = (productoID) => {
        Swal.fire({
            title: 'Estas seguro de Eliminar?',
            text: "No podras revertir la eliminación!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(productoID)
            }
        })
    }
    return (
        <button className='btn btn-danger ms-2' onClick={() => { confirmarEliminar(id_producto) }}>Eliminar</button>
    )
}

export default DeleteButton;