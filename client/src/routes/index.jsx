
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductoDetalle from "../pages/productos/ProductoDetalle";
import ProductoEditar from "../pages/productos/ProductoEditar";
import Productos from "../pages/productos/Productos";
import ProductosAdd from "../pages/productos/ProductosAdd";

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement : <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'productos',
                element: <Productos />
            },
            {
                path: 'productos/agregar',
                element: <ProductosAdd />
            },
            {
                path: 'productos/:id',
                element: <ProductoDetalle />
            },
            {
                path: 'productos/:id/editar',
                element: <ProductoEditar />
            }

        ]
    }
]);