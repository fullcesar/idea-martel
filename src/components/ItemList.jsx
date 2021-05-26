import React from 'react';
import 'materialize-css';
import {Row, Col} from 'react-materialize';
import Item from "../components/Item";

import "../assets/css/product-card.css";

const ItemList = () => {

    const $productos = [
        {
            "productoId": 1001,
            "productoCategoria": "Categoria A",
            "productName": "Producto 1",
            "productImage": "https://picsum.photos/400?image=780",
            "productStock": 10,
            "productPrice": 200.00,
        },
        {
            "productoId": 1002,
            "productoCategoria": "Categoria B",
            "productName": "Producto 2",
            "productImage": "https://picsum.photos/400?image=871",
            "productStock": 10,
            "productPrice": 150.00,
        },
        {
            "productoId": 1003,
            "productoCategoria": "Categoria A",
            "productName": "Producto 3",
            "productImage": "https://picsum.photos/400?image=888",
            "productStock": 6,
            "productPrice": 700.00,
        },
        {
            "productoId": 1004,
            "productoCategoria": "Categoria B",
            "productName": "Producto 4",
            "productImage": "https://picsum.photos/400?image=433",
            "productStock": 5,
            "productPrice": 1200.00,
        },
        {
            "productoId": 1005,
            "productoCategoria": "Categoria C",
            "productName": "Producto 5",
            "productImage": "https://picsum.photos/400?image=234",
            "productStock": 8,
            "productPrice": 900.00,
        },
        {
            "productoId": 1006,
            "productoCategoria": "Categoria D",
            "productName": "Producto 6",
            "productImage": "https://picsum.photos/400?image=291",
            "productStock": 10,
            "productPrice": 300.00,
        }
    ]

    const [productos, setProductos] = React.useState([]);

    const obtenerProductos = async () => {
        setTimeout( () => {
            const datosProductos = $productos; 
            setProductos (datosProductos);
        }, 2500 );
    }

    React.useEffect (function() {
        //console.log('hola me ejecute');
        obtenerProductos();
    },[]);

    return (
        <>
        {productos.map( (item) => (
        <Col
          m={3}
          s={6}
        >
            <Item key={item.productoId} initial={1} stock={item.productStock} nombre={item.productName} imagen={item.productImage} precio={item.productPrice}/>   
        </Col>
        ))}
        </> 
    )
}

export default ItemList
