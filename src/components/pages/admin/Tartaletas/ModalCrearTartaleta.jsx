
import Modal from 'react-bootstrap/Modal';
import CrearTartaleta from './CrearTartaleta';

export default function ModalCrearTartaleta({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin' >
      <Modal.Body className='modal-body-detalles'>
      <section className="administrador col-12 text-center">
        <p className="banner-administrador">Administrador</p>
      </section>
        <CrearTartaleta/>
        <button className="salir col-12 text-center" onClick={handleClose}>
          <p className="banner-administrador">Salir X</p>
        </button>
      </Modal.Body>
     </Modal>
  )
}
