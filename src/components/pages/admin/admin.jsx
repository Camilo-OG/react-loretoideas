import './admin.css'; // Importa el archivo CSS si lo tienes
import { useState } from 'react';
import AdminModal from './AdminModal';
import FuncionesAdmin from './FuncionesAdmin'

const Administrador = () => {
  
  return (
    <section id="Administrador">
      <p>Administrador</p>
    </section>
  );
};

const Box = ( {imgSrc, altText, title, id, funcionTorta , funcionTartaleta} ) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <button className='boton-admin' onClick={handleShow} id={id}>
      <div className="box">
        <img className='img-admin' src={imgSrc} alt={altText} />
        <section className="texto-admin">
          <h3 className='titulo-admin'>{title}</h3>
        </section>
      </div>
    </button>
    <AdminModal show={show} handleClose={handleClose} accion={title} funcion1={funcionTorta} funcion2={funcionTartaleta}/>
    </>
  );
};

const Container = () => {

  const [id1 , setId1] = useState('')

  const setTortaId1 = ()=> setId1('VerTorta');
  const setTartaletaId1 = ()=> setId1('VerTartaleta');
  

  return (
    <div className="container container-admin">
      
      <Box     
        imgSrc="icons/6372973_list_menu_navigation_option_setting_icon (1).png"
        altText="Imagen 2"
        title="Ver Producto"
        id={id1}
        funcionTorta={setTortaId1}
        funcionTartaleta={setTartaletaId1}

      />
      <Box
        imgSrc="icons/add-product.png"
        altText="Imagen 2"
        title="Agregar Producto"
        id="AgregarProducto"
      />
      <Box
        imgSrc="icons/edit-product.png"
        altText="Imagen 3"
        title="Editar Producto"
        id="EditarProducto"
      />
      <Box
        imgSrc="icons/delete-product.png"
        altText="Imagen 4"
        title="Desactivar Producto"
        id="DesactivarProducto"
      />
    </div>
  );
};

const Salir = () => {
  return (
    <section id="Salir">
      <p>Salir X</p>
    </section>
  );
};

const VistaAdministrador = () => {
  return (
    <div >
      <Administrador />
      <div className='Contenedor-admin-general'>

      <Container />
      <FuncionesAdmin/>
      </div>
      <Salir />
    </div>
  );
};

export default VistaAdministrador;
