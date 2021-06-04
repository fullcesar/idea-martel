import 'materialize-css';
import {Row} from 'react-materialize';
import { useParams } from 'react-router';

import ItemList from "../components/ItemList";

const ItemListContainer = () => {

    const params = useParams();

    return (
        <Row>
            <ItemList params={params} />
        </Row>
    )
}

export default ItemListContainer
