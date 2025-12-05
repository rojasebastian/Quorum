import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="inicio" draggable="true" style={{ fontSize: '4rem' }}>
        <Link to="/main">Quorum</Link>
      </h1>
      <nav className="menu">
        <a className="inicio" href="#">Empieza a aprender</a>
        <Link to="/curiosidades">Ciencia curiosa</Link>
        <a href="#"><i className="fa-solid fa-user"></i></a>
      </nav>
    </header>
  );
}

export default Header;
