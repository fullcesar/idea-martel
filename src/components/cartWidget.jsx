import 'materialize-css';
import {Icon, NavItem} from 'react-materialize';

const CartWidget = () => {
    return (
        <>
           <NavItem href="#!">
             <Icon small>
                shopping_cart
             </Icon>
           </NavItem>
        </>
    )
}

export default CartWidget
