import 'materialize-css';
import {Navbar, NavItem, Icon} from 'react-materialize';
import CartWidget from './cartWidget';

import "../assets/css/navbar.css";

const NavBar = ({ props }) => {
  return (
    <Navbar
      className="mi-nav"
      alignLinks="right"
      brand={<a className="brand-logo" href="#!">Mi Tienda <Icon medium>local_mall</Icon></a>}
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="#!">
        Inicio
      </NavItem>
      <NavItem href="#!">
        Productos
      </NavItem>
      <NavItem href="#!">
        Nosotros
      </NavItem>
      <NavItem href="#!">
        Contacto
      </NavItem>
      <CartWidget />
    </Navbar>
  )
}

export default NavBar
