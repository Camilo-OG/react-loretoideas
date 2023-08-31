import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import './NavBarPage.css';
import CarritoP from '../../carrito/CarritoPrincipal';
import LoginModal from '../../login/LoginModal';

function NavBarPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);
  const [carrito, setCarrito] = useState([]); // Estado del carrito

  const handleLogin = () => showLogin ? setShowLogin(false) : setShowLogin(true);
  const handleCarrito = () => showCarrito ? setShowCarrito(false) : setShowCarrito(true);

  // const ColorNav = {
  //   backgroundColor: '#B8226A',
  // };

const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); // Agregar producto al carrito
  };

  return (
    <>
      <Navbar expand="lg"  className='bg-navbar'>
        <Container className="contenedor">
        <Link className="link" to="/admin">
                
            <img
              className="LoretoIdeas"
              src="icons/Logo-loretoideas.png"
              alt="LoretoIdeas"
            />
        </Link>
          {/* <a className="link" href="/admin">
          </a> */}
          <a>   {/* className="link" href="http://localhost:5173/login" */}
            <img
              className="logo"
              src="icons/Usuario.png"
              alt="Logo"
              onClick={handleLogin}
            />
          </a>
          <div className="div-con-linea"></div>
          <a className="link">
            <img
              className="carrito"
              src="icons/carrito.png"
              alt="carrito"
              onClick={handleCarrito}
            />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">
                Inicio
              </Link>
              <Link className="link" to="/productos">
                Productos
              </Link>
              <Link className="link" to="/cocteleria">
                Coctelería
              </Link>
              <Link className="link" to="/desayunos">
                Desayunos
              </Link>
              <Link className="link" to="/nosotros">
                Nosotros
              </Link>
            </Nav>
            <LoginModal show={showLogin} onHide={handleLogin} />
            <CarritoP show2={showCarrito} onHide2={handleCarrito} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBarPage;
