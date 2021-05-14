import React from 'react'
import PropTypes from 'prop-types';
import logo from '../assets/images/react.svg';

import '../assets/css/navbar.css';

const NavBar = ({ props }) => {
    return (
        <header>
            <nav>
                <li>
                    <a href="#!">Inicio</a>
                </li>
                <li>
                    <a href="#!">Productos</a>
                </li>
                <li>
                    <a href="#!">
                        <div className="logo-container">
                            <img src={ logo } alt="logo" width="58" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#!">Nosotros</a>
                </li>
                <li>
                    <a href="#!">Contacto</a>
                </li>
            </nav>
        </header>
    )
}

NavBar.propTypes = {
    props: PropTypes.string.isRequired,
}

export default NavBar
