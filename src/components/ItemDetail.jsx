import React from 'react';
import 'materialize-css';
import {Row, Col, MediaBox, Item, Chip, Icon} from 'react-materialize';
//import Item from "../components/Item";

//import "../assets/css/product-card.css";

const ItemDetail = () => {

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

    const obtenerProductos = function () {
        return new Promise( function(resolve, reject) {
            const unaUnidad = $productos.slice(0, 1);
            setProductos (unaUnidad);
            resolve(productos);
        });
    }

    React.useEffect (function() {
        setTimeout(() => {
            obtenerProductos().then ( result => { 
                console.log(result);
            });
        }, 2000);
    },[]);
    

    return (
        <>
          {productos.map( (item) => (
            <Row>
                <Col
                l={6}
                m={12}
                s={12}
                >
                   <MediaBox
                    id="MediaBox_1"
                    options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200
                    }}
                    >
                    <img
                        alt=""
                        src={item.productImage}
                        width="100%"
                        className="responsive-img"
                    />
                    </MediaBox>
                </Col>

                <Col
                l={6}
                m={12}
                s={12}
                >
                    <h3 className="titulo-prod">{item.productName}</h3>

                    <Chip
                        className="elPrecio center-align"
                        close={false}
                        closeIcon={<Icon className="close">close</Icon>}
                        options={null}
                    >
                        {`$ ${item.productPrice}`}
                    </Chip>

                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac consectetur ante. Vivamus nec rutrum nibh. Praesent fringilla in dolor ac tincidunt. Morbi sed tellus ante.</p>

                    <p className="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eros mi, posuere at placerat non, molestie a libero. Suspendisse imperdiet.</p>
                </Col>
            </Row>
          ))}
        </> 
    )
}

export default ItemDetail
