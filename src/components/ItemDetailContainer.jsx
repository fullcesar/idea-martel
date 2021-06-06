import React from 'react';
import 'materialize-css';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const $productos = [
        {
            "productoId": 1001,
            "productoCategoria": "categoria-a",
            "productName": "Producto 1",
            "productImage": "https://picsum.photos/400?image=780",
            "productStock": 3,
            "productPrice": 200.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1002,
            "productoCategoria": "categoria-b",
            "productName": "Producto 2",
            "productImage": "https://picsum.photos/400?image=871",
            "productStock": 10,
            "productPrice": 150.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1003,
            "productoCategoria": "categoria-a",
            "productName": "Producto 3",
            "productImage": "https://picsum.photos/400?image=888",
            "productStock": 4,
            "productPrice": 700.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1004,
            "productoCategoria": "categoria-b",
            "productName": "Producto 4",
            "productImage": "https://picsum.photos/400?image=430",
            "productStock": 7,
            "productPrice": 1200.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1005,
            "productoCategoria": "categoria-c",
            "productName": "Producto 5",
            "productImage": "https://picsum.photos/400?image=234",
            "productStock": 10,
            "productPrice": 900.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1006,
            "productoCategoria": "categoria-d",
            "productName": "Producto 6",
            "productImage": "https://picsum.photos/400?image=293",
            "productStock": 6,
            "productPrice": 300.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
        {
            "productoId": 1007,
            "productoCategoria": "categoria-b",
            "productName": "Producto 7",
            "productImage": "https://picsum.photos/400?image=490",
            "productStock": 8,
            "productPrice": 100.00,
            "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet."
        },
    ];

    const params = useParams();

    const [productos, setProductos] = React.useState([]);

    const obtenerProductos = function () {
        return new Promise( function(resolve, reject) {
            //const unaUnidad = $productos.slice(0, 1);
            const elProd = $productos.filter(prod => prod.productoId == params.itemId);
            setProductos (elProd);
            resolve(productos);
        });
    }

    React.useEffect (function() {
        setTimeout(() => {
            obtenerProductos();
        }, 2000);
    },[params.itemId]);

    return (
        <div className="container">
            <>
            {productos.map( (item) => (
                <ItemDetail prod={item} />
            ))}
            </> 
        </div>
    )
}

export default ItemDetailContainer
