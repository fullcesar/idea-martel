import 'materialize-css';
import {Icon, Card, Row, Col, CardTitle, Button, TextInput} from 'react-materialize';
import React, { useState } from "react";

import "../assets/css/product-card.css";


const ItemCount = (props) => {
    
    let [cantidad, setCantidad] = useState(props.initial);

    const actualizaCantidad = function (operacion) {
        let stock = Number(props.stock);
        cantidad = Number(cantidad);

        console.log(cantidad);

        if(cantidad > stock) {
            setCantidad(stock);
            console.info ("cantidad supera el stock!");
            return;
        }else if (cantidad < props.initial) {
            console.info ("cantidad no puede ser menor que el valor inicial!");
            setCantidad(props.initial);
            return;
        }else {
            console.info ("valor correcto: incrementar o decrementar");
            if(operacion=="agregar"){
                setCantidad(cantidad + 1);
            } else if(operacion=="quitar") {
                setCantidad(cantidad - 1);
            }
        }

    };

    return (
        <Row>
            <Col
                m={3}
                s={6}
            >
                <Card
                className="center-align"
                actions={[
                    <Button
                        id="btnAddToCart"
                        className="purple"
                        node="button"
                        style={{
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        waves="light"
                    >
                        Agregar al carrito
                        <Icon right>
                        add_shopping_cart
                        </Icon>
                    </Button>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image="https://image.freepik.com/free-photo/3d-generic-eletronic-tablet-grunge-wood-background_1048-8159.jpg">Soy un producto</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                >
                   
                    <Row className="contadorCont">
                        <Col
                            s={4}
                            className="center-align"
                        >
                            <Button
                                id="btnLess"
                                className="purple"
                                floating
                                icon={<Icon>remove</Icon>}
                                small
                                node="button"
                                waves="purple"
                                onClick={() => actualizaCantidad ("quitar")}
                            />
                        </Col>

                        <Col
                            s={4}
                            className="center-align"
                        >
                            <TextInput id="cantidad" type="number" value={cantidad} />
                        </Col>

                        <Col
                            s={4}
                            className="center-align"
                        >
                            <Button
                                id="btnAdd"
                                className="purple"
                                floating
                                icon={<Icon>add</Icon>}
                                small
                                node="button"
                                waves="purple"
                                onClick={() => actualizaCantidad ("agregar")}
                            />
                        </Col>
                    </Row>
                  
                </Card>
            </Col>
        </Row>
    )
    
}

export default ItemCount
