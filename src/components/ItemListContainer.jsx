import 'materialize-css';
import {Row} from 'react-materialize';

import ItemList from "../components/ItemList"

const ItemListContainer = () => {
    return (
        <Row>
            <ItemList />
        </Row>
    )
}

export default ItemListContainer
