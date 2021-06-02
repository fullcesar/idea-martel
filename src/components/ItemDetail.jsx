import React from 'react';
import 'materialize-css';
import {Row, Col, MediaBox, Chip, Icon} from 'react-materialize';

const ItemDetail = (props) => {
    return (
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
                    src={props.prod.productImage}
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
                <h3 className="titulo-prod">{props.prod.productName}</h3>

                <Chip
                    className="elPrecio center-align"
                    close={false}
                    closeIcon={<Icon className="close">close</Icon>}
                    options={null}
                >
                    {`$ ${props.prod.productPrice}`}
                </Chip>

                <div className="description">
                    {props.prod.productDescription}
                </div>
            </Col>
        </Row>
    )
}

export default ItemDetail
