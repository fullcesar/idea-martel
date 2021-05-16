import 'materialize-css';
//import {Navbar, Icon, NavItem} from 'react-materialize';

const ItemListContainer = (props) => {
    return (
        <h3 style={props.estilos}>{props.children}</h3>
    )
}

export default ItemListContainer
