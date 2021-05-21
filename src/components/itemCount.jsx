import 'materialize-css';
import {Icon, Card, Row, Col, CardTitle, Button, TextInput} from 'react-materialize';
import React, { useState } from "react";

import "../assets/css/product-card.css";


const ItemCount = (props) => {
    
    let [initial, setInitial] = useState(1);
    let [stock, setStock] = useState(10);

    const actualizaCantidad = function (operacion) {
        stock = Number(props.stock);
        initial = Number(initial);

        console.log(operacion);
        console.log(initial);

        if(initial < 1) {
            setInitial(1);
        }else if(initial >= stock) {
            setInitial(stock);
        } else {
            if(operacion=="agregar"){
                setInitial(initial + 1);
            } else if(operacion=="quitar") {
                setInitial(initial - 1);
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
                            <TextInput id="cantidad" type="number" value={initial} />
                        </Col>

                        <Col
                            s={4}
                            className="center-align"
                        >
                            <Button
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
