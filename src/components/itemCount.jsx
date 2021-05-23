import 'materialize-css';
import {Icon, Card, Row, Col, CardTitle, Button, TextInput} from 'react-materialize';
import React, { useState } from "react";

import "../assets/css/product-card.css";


const ItemCount = ({stock, initial}) => {
    
    const [cantidad, setCantidad] = useState(Number(initial));

    const actualizaCantidad = function (add) {
        if ((stock>=cantidad+add) && (0 <= cantidad+add+add) ) setCantidad (cantidad+add);
    }

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
                                onClick={() => actualizaCantidad (-1)}
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
                                onClick={() => actualizaCantidad (1)}
                            />
                        </Col>
                    </Row>
                  
                </Card>
            </Col>
        </Row>
    )
    
}

export default ItemCount
