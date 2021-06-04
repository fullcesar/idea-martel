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
            "productStock": true,
            "productPrice": 200.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1002,
            "productoCategoria": "Categoria B",
            "productName": "Producto 2",
            "productImage": "https://picsum.photos/400?image=871",
            "productStock": true,
            "productPrice": 150.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1003,
            "productoCategoria": "Categoria A",
            "productName": "Producto 3",
            "productImage": "https://picsum.photos/400?image=888",
            "productStock": true,
            "productPrice": 700.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1004,
            "productoCategoria": "Categoria B",
            "productName": "Producto 4",
            "productImage": "https://picsum.photos/400?image=430",
            "productStock": true,
            "productPrice": 1200.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1005,
            "productoCategoria": "Categoria C",
            "productName": "Producto 5",
            "productImage": "https://picsum.photos/400?image=234",
            "productStock": true,
            "productPrice": 900.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1006,
            "productoCategoria": "Categoria D",
            "productName": "Producto 6",
            "productImage": "https://picsum.photos/400?image=293",
            "productStock": true,
            "productPrice": 300.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1007,
            "productoCategoria": "Categoria B",
            "productName": "Producto 7",
            "productImage": "https://picsum.photos/400?image=490",
            "productStock": true,
            "productPrice": 100.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
    ];

    const [productos, setProductos] = React.useState([]);

    const obtenerProductos = async () => {
        setTimeout( () => {
            const datosProductos = $productos; 
            setProductos (datosProductos);
        }, 2000 );
    }

    React.useEffect (function() {
        //console.log('hola me ejecute');
        obtenerProductos();
    },[]);

    /* Lo trate de implementar asi pero me mata la aplicacion:
    const $catID = `Categoria ${props.params.catId}`;

    const [productos, setProductos] = React.useState([]);

    const obtenerProductos = async () => {
        setTimeout( () => {
            const datosProductos = $productos.filter(prod => prod.productoCategoria == $catID);
            setProductos (datosProductos);
        }, 2000 );
    }

    React.useEffect (function() {
        //console.log('hola me ejecute');
        obtenerProductos();
    },[$catID]);
    */

    return (
        <>
        {productos.map( (item) => (
        <Col
          m={3}
          s={6}
        >
            <Item pid={item.productoId} initial={1} stock={item.productStock} nombre={item.productName} imagen={item.productImage} precio={item.productPrice}/>   
        </Col>
        ))}
        </> 
    )
}

export default ItemList
