import 'materialize-css';
import {Col} from 'react-materialize';
import Item from "../components/Item";

import "../assets/css/product-card.css";

const ItemList = (props) => {
    return (
        <>
        {props.prod.map( (item) => (
        <Col
          key ={item.productoId}
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
