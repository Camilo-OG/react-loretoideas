/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../productos/productos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardTartaleta(props) {
  const src = 'img/';
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarAlCarrito = () => {
    const productoAgregado = {
      imagenSrc: src + props.imagen,
      titulo: props.nombre,
      precio: props.precio,
      cantidad: 1,
    };
    props.agregarAlCarrito(productoAgregado);
    handleClose();
  };

  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      {/* ... (resto del componente) ... */}
      <div className="d-flex text-center align-items-center justify-content-around mt-2 ">
        <p className="card-text precio">$ {props.precio}</p>
        <a href="#" className="btn boton-agregar-carrito align-content-end" onClick={handleShow}>Agregar</a>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {/* ... (resto del modal) ... */}
          <a className='btn btn-carrito' onClick={agregarAlCarrito}>Agregar <img className="carrito" src="icons/carrito.png" alt="carrito" /></a>
        </Modal.Body>
      </Modal>
    </div>
  );
}
