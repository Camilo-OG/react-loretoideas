import CrearTartaleta from "./Tartaletas/CrearTartaleta";
import ModificarStatusTartaleta from "./Tartaletas/ModificarStatusTartaleta";
import ModificarFullTartaleta from "./Tartaletas/ModificarFullTartaleta";
import MostrarTartaletas from "./Tartaletas/MostrarTartaletas";
import CrearTorta from "./Tortas/CrearTorta";
import ModificarFullTorta from "./Tortas/ModificarFullTorta";
import ModificarStatusTorta from "./Tortas/ModificarStatusTorta";
import MostrarTorta from "./Tortas/MostrarTorta";
import AdminModal from "./AdminModal";
import { useState, useEffect } from "react";
import "./admin.css";
import ModalCrearTartaleta from "./Tartaletas/ModalCrearTartaleta";
import ModalDesactivarTartaleta from "./Tartaletas/ModalDesactivarTartaleta";
import ModalModificarTartaleta from "./Tartaletas/ModalModificarTartaleta";
import ModalMostrarTartaletas from "./Tartaletas/ModalMostrarTartaletas";
import ModalCrearTorta from "./Tortas/ModalCrearTorta";
import ModalDesactivarTorta from "./Tortas/ModalDesactivarTorta";
import ModalModificarTorta from "./Tortas/ModalModificarTorta";
import ModalMostrarTortas from "./Tortas/ModalMostrarTortas";
import { Link } from "react-router-dom";

export default function AdminView() {
  const [verTorta, setVerTorta] = useState(false);
  const [verTartaleta, setVerTartaleta] = useState(false);
  const [verTortaModificar, setVerTortaModificar] = useState(false);
  const [verTartaletaModificar, setVerTartaletaModificar] = useState(false);
  const [verTortaDesactivar, setVerTortaDesactivar] = useState(false);
  const [verTartaletaDesactivar, setVerTartaletaDesactivar] = useState(false);
  const [verTortaAgregar, setVerTortaAgregar] = useState(false);
  const [verTartaletaAgregar, setVerTartaletaAgregar] = useState(false);

  /* Modal1 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* Modal2 */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  /* Modal3 */
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  /* Modal4 */
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  /* Modal5 */
  const [show5, setShow5] = useState(true);
  const handleClose5 = () => {
    setShow5(false);
    setShow6(true);
    setShow7(true);
    setShow8(true);
    setShow9(true);
    setShow10(true);
    setShow11(true);
    setShow12(true);
  };

  /* Modal6 */
  const [show6, setShow6] = useState(true);
  const handleClose6 = () => {
    setShow5(true);
    setShow6(false);
    setShow7(true);
    setShow8(true);
    setShow9(true);
    setShow10(true);
    setShow11(true);
    setShow12(true);
  };

  /* Modal7 */
  const [show7, setShow7] = useState(true);
  const handleClose7 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(false);
    setShow8(true);
    setShow9(true);
    setShow10(true);
    setShow11(true);
    setShow12(true);
  };

  /* Modal8 */
  const [show8, setShow8] = useState(true);
  const handleClose8 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(true);
    setShow8(false);
    setShow9(true);
    setShow10(true);
    setShow11(true);
    setShow12(true);
  };

  /* Modal9 */
  const [show9, setShow9] = useState(true);
  const handleClose9 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(true);
    setShow8(true);
    setShow9(false);
    setShow10(true);
    setShow11(true);
    setShow12(true);
  };

  /* Modal10 */
  const [show10, setShow10] = useState(true);
  const handleClose10 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(true);
    setShow8(true);
    setShow9(true);
    setShow10(false);
    setShow11(true);
    setShow12(true);
  };

  /* Modal11 */
  const [show11, setShow11] = useState(true);
  const handleClose11 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(true);
    setShow8(true);
    setShow9(true);
    setShow10(true);
    setShow11(false);
    setShow12(true);
  };

  /* Modal12 */
  const [show12, setShow12] = useState(true);
  const handleClose12 = () => {
    setShow5(true);
    setShow6(true);
    setShow7(true);
    setShow8(true);
    setShow9(true);
    setShow10(true);
    setShow11(true);
    setShow12(false);
  };

  const mostrarTartaleta = () => {
    setVerTartaleta(true);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose();
  };
  const mostrarTorta = () => {
    setVerTartaleta(false);
    setVerTorta(true);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose();
  };
  const agregarTartaleta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(true);
    handleClose2();
  };
  const agregarTorta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(true);
    setVerTartaletaAgregar(false);
    handleClose2();
  };
  const editarTartaleta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(true);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose3();
  };
  const editarTorta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(true);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose3();
  };
  const desactivarTartaleta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(false);
    setVerTartaletaDesactivar(true);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose4();
  };
  const desactivarTorta = () => {
    setVerTartaleta(false);
    setVerTorta(false);
    setVerTortaModificar(false);
    setVerTartaletaModificar(false);
    setVerTortaDesactivar(true);
    setVerTartaletaDesactivar(false);
    setVerTortaAgregar(false);
    setVerTartaletaAgregar(false);
    handleClose4();
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="fondo-admin">
      <div className="administrador col-12 text-center">
        <p className="banner-administrador">Administrador</p>
      </div>

      <div className="Contenedor-admin-general">
        {/* Izquierda */}
        <div className="container-fluid container-admin p-0">
          {/* Boton 1 */}
          <button className="boton-admin" onClick={handleShow}>
            <div className="box">
              
              <section className="texto-admin">
              <img
                className="img-admin"
                src="icons/6372973_list_menu_navigation_option_setting_icon (1).png"
                alt="Imagen 1"
              />
                <h3 className="titulo-admin">Ver Producto</h3>
              </section>
            </div>
          </button>
          <AdminModal
            show={show}
            handleClose={handleClose}
            accion={"Ver Producto"}
            funcion1={mostrarTorta}
            funcion2={mostrarTartaleta}
          />
          {/* Boton 2 */}
          <button className="boton-admin" onClick={handleShow2}>
            <div className="box">
              
              <section className="texto-admin">
              <img
                className="img-admin"
                src="icons/add-product.png"
                alt="Imagen 2"
              />
                <h3 className="titulo-admin">Agregar Producto</h3>
              </section>
            </div>
          </button>
          <AdminModal
            show={show2}
            handleClose={handleClose2}
            accion={"Agregar Producto"}
            funcion1={agregarTorta}
            funcion2={agregarTartaleta}
          />
          {/* Boton 3 */}
          <button className="boton-admin" onClick={handleShow3}>
            <div className="box">
              
              <section className="texto-admin">
              <img
                className="img-admin"
                src="icons/edit-product.png"
                alt="Imagen 3"
              />
                <h3 className="titulo-admin">Editar Producto</h3>
              </section>
            </div>
          </button>
          <AdminModal
            show={show3}
            handleClose={handleClose3}
            accion={"Editar Producto"}
            funcion1={editarTorta}
            funcion2={editarTartaleta}
          />
          {/* Boton 4 */}
          <button className="boton-admin" onClick={handleShow4}>
            <div className="box">
              
              <section className="texto-admin">
              <img
                className="img-admin"
                src="icons/delete-product.png"
                alt="Imagen 4"
              />
                <h3 className="titulo-admin">Desactivar Producto</h3>
              </section>
            </div>
          </button>
          <AdminModal
            show={show4}
            handleClose={handleClose4}
            accion={"Desactivar Producto"}
            funcion1={desactivarTorta}
            funcion2={desactivarTartaleta}
          />

          <div className="contenedorModalAdmin">
            {screenWidth < 768 && verTorta && (
              <ModalMostrarTortas show={show5} handleClose={handleClose5} />
            )}
            {screenWidth < 768 && verTartaleta && (
              <ModalMostrarTartaletas show={show6} handleClose={handleClose6} />
            )}
            {screenWidth < 768 && verTortaModificar && (
              <ModalModificarTorta show={show7} handleClose={handleClose7} />
            )}
            {screenWidth < 768 && verTartaletaModificar && (
              <ModalModificarTartaleta
                show={show8}
                handleClose={handleClose8}
              />
            )}
            {screenWidth < 768 && verTortaDesactivar && (
              <ModalDesactivarTorta show={show9} handleClose={handleClose9} />
            )}
            {screenWidth < 768 && verTartaletaDesactivar && (
              <ModalDesactivarTartaleta
                show={show10}
                handleClose={handleClose10}
              />
            )}
            {screenWidth < 768 && verTortaAgregar && (
              <ModalCrearTorta show={show11} handleClose={handleClose11} />
            )}
            {screenWidth < 768 && verTartaletaAgregar && (
              <ModalCrearTartaleta show={show12} handleClose={handleClose12} />
            )}
          </div>
        </div>
        {/* Derecha */}
        <div className="funcionesAdmin" id="funcionesAdmin">
          {screenWidth > 768 && verTorta && <MostrarTorta />}
          {screenWidth > 768 && verTartaleta && <MostrarTartaletas />}
          {screenWidth > 768 && verTortaModificar && <ModificarFullTorta />}
          {screenWidth > 768 && verTartaletaModificar && (
            <ModificarFullTartaleta />
          )}
          {screenWidth > 768 && verTortaDesactivar && <ModificarStatusTorta />}
          {screenWidth > 768 && verTartaletaDesactivar && (
            <ModificarStatusTartaleta />
          )}
          {screenWidth > 768 && verTortaAgregar && <CrearTorta />}
          {screenWidth > 768 && verTartaletaAgregar && <CrearTartaleta />}
        </div>
      </div>
      
      <button className="salir col-12 text-center">
        <Link className="banner-administrador " to="/">
          Volver a la página principal
        </Link>
      </button>
    </section>
  );
}
