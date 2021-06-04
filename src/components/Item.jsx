import React from 'react';
import 'materialize-css';
import {Icon, Card, Row, Col, CardTitle, Button, TextInput, Chip} from 'react-materialize';
import {
    Link, 
    NavLink
  } from "react-router-dom";

import "../assets/css/product-card.css";

const Item = (props) => {

    console.log(props);
    
    const [cantidad, setCantidad] = React.useState(props.initial);

    const actualizaCantidad = function (add) {
        if ((props.stock>=cantidad+add) && (0 <= cantidad+add+add) ) setCantidad (cantidad+add);
    }

    return (
        <Card
            className="center-align"
            actions={[
                <>
                    <Chip
                        className="elPrecio"
                        close={false}
                        closeIcon={<Icon className="close">close</Icon>}
                        options={null}
                    >
                        {`$ ${props.precio}`}
                    </Chip>
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
                </>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<Link to={`/item/${props.pid}`}><CardTitle image={props.imagen}>{props.nombre}</CardTitle></Link>}
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
    )
}

export default Item
