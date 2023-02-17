import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const ProductoErrores = Yup.object().shape({
    title: Yup.string()
        .required('Required')
        .min(5, 'Debe de tener como minimo 5 caracteres!')
        .max(70, 'No debe ser muy largo!'),
        
    price: Yup.number()
        .integer('Debe ser un número entero')
        .required('Se necesita la edad')
        .positive('No puede ser negativo'),
        
        
    description: Yup.string()
        .required('La descripción es requerida')
        .min(10, 'Debe de tener como minímo 10 caracteres!')
        .max(200, 'No puede superar los 100 caracteres!'),

});

const ProductoForm = ({initialValues, botonTexto, onSubmit}) => {




    return (
        <Formik
            enableReinitialize= {true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ProductoErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field name="title" className="form-control" placeholder="Title" />
                    {touched.title && errors.title && <div className='ms-3 mt-1 text-danger'>{errors.title}</div>}
                    <Field name="price" type="number" className="form-control mt-2" placeholder="Price" />
                    {touched.price && errors.price && <div className='ms-3 mt-1 text-danger'>{errors.price}</div>}
                    <Field name="description"  className="form-control mt-2" placeholder="Description" />
                    {touched.description && errors.description && <div className='ms-3 mt-1 text-danger'>{errors.description}</div>}
                    <button className='btn btn-primary mt-5' disabled={!(isValid && dirty)}>{botonTexto} Producto</button>
                </Form>
            )}
        </Formik>

    )
}

export default ProductoForm;