
import Modal from 'react-bootstrap/Modal';
import Carrito from './Carrito';
import "./stylecarrito.css"


function CarritoP({ show2, onHide2 }) {
  return (
    <>
      <Modal show={show2} onHide={onHide2}>
        <Carrito />
      </Modal>
    </>
  );
}

export default CarritoP;
