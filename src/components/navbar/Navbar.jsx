import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
        <div className="buttons">
            <button type="button"><Link className="link" to="/search">Rechercher un jeu</Link></button>
            <button type="button">Me contacter</button>
        </div>
    </div>

  );
};

export default Navbar;