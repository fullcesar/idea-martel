import 'materialize-css';
import {Navbar, Icon} from 'react-materialize';
import CartWidget from './CartWidget';
import {
  Link
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
      
      <Link to="/">
        Inicio
      </Link>

      <Link to="/categoria/categoria-a">
        Categoria A
      </Link>

      <Link to="/categoria/categoria-b">
        Categoria B
      </Link>

      <Link to="/categoria/categoria-c">
        Categoria C
      </Link>

      <Link to="/categoria/categoria-d">
        Categoria D
      </Link>
      
      <CartWidget />

    </Navbar>
  )
}

export default NavBar
