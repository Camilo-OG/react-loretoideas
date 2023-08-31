import Modal from 'react-bootstrap/Modal';
import ModificarStatusTartaleta from './ModificarStatusTartaleta';

export default function ModalDesactivarTartaleta({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} className='contenedorModalAdmin' >
      <Modal.Body className='modal-body-detalles'>
      <section className="administrador col-12 text-center">
        <p className="banner-administrador">Administrador</p>
      </section>
        <ModificarStatusTartaleta/>
        <button className="salir col-12 text-center" onClick={handleClose}>
          <p className="banner-administrador">Salir X</p>
        </button>
      </Modal.Body>
     </Modal>
  )
}
