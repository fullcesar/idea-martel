import 'materialize-css';
import {Navbar, NavItem, Icon} from 'react-materialize';
import CartWidget from './CartWidget';
import {
  Link, 
  NavLink
} from "react-router-dom";

import "../assets/css/navbar.css";

const NavBar = ({ props }) => {
  return (
    <Navbar
      className="mi-nav"
      alignLinks="right"
      brand={<a className="brand-logo" href="/">Mi Tienda <Icon medium>local_mall</Icon></a>}
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
      
      <NavItem to="/">
        Inicio
      </NavItem>

      <NavItem to="/categoria/A">
        Categoria A
      </NavItem>

      <NavItem to="/categoria/B">
        Categoria B
      </NavItem>

      <NavItem to="/categoria/C">
        Categoria C
      </NavItem>

      <NavItem to="/categoria/D">
        Categoria D
      </NavItem>
      
      <CartWidget />

    </Navbar>
  )
}

export default NavBar
