/* eslint-disable react/prop-types */
import "../productos/productos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalFormulario from "./ModalFormulario";

export default function CardTartaleta(props) {
  const src = "img/";
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  

  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card m-0">
        <div className="img-container m-2">
          <div className="m-3">
            <img
              src={src + props.imagen}
              id="imagen-card"
              className="card-img-top img-tarta"
              alt={props.img_descripcion}
            />
          </div>
          <div className="btn-detalle mb-2">
            <button className="btn detalle card-text" onClick={handleShow}>
              + Detalle
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <h5 className="card-title">{props.nombre}</h5>
          </div>
          <div className="d-inline">
            <p className="card-text porciones">{props.diametro}</p>
          </div>
          <div className="d-flex text-center align-items-center justify-content-between mt-2 precio-agregar">
            <p className="card-text precio">$ {props.precio}</p>
            <button
              className="btn boton-agregar-carrito align-content-end"
              onClick={handleShow2}
            >
              Agendar Pedido
            </button>
            <Link
              className="btn boton-agregar-carrito align-content-end"
              to={`https://api.whatsapp.com/send?phone=56975688406&text=Hola%20Loreto%20Ideas%2C%0AQuisiera%20comprar%20esta%20torta%3A%0A%0ATorta%20de%20Yogurth%20---%2015%20porciones%20---%20%2415000`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Realizar Pedido
            </Link>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modal-body-detalles">
          <div className="mitad-arriba">
            <button className="boton-flecha p-0 " onClick={handleClose}>
              <img
                className="flecha"
                src="icons/flecha naranja.png"
                alt="flecha"
              />
            </button>
            <a href="#">
              <img
                className="kuchen"
                src={src + props.imagen}
                alt={props.img_descripcion}
              />
            </a>
            <div className="contenedor">
              <div className="izquierda">
                <h5 className="mt-4">{props.diametro}</h5>
              </div>
              <div className="derecha">
                <a href="#">
                  <img
                    className="corazon"
                    src="icons/Me-gusta.png"
                    alt="corazon"
                  />
                </a>
                <br></br>$ {props.precio}
              </div>
            </div>
          </div>

          <div className="mitad-abajo">
            <p className="titulo"> {props.nombre} </p>
            <p className="descripcion p-2 mb-3">{props.descripcion}</p>

            <Link
              className="btn btn-carrito"
              to={`https://api.whatsapp.com/send?phone=56975688406&text=Hola%20Loreto%20Ideas%21%20Quisiera%20comprar%20un/a%20${props.nombre}%20de%20${props.diametro}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Realizar Pedido
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <ModalFormulario show={show2} handleClose={handleClose2} data={props}/>
    </div>
  );
}
