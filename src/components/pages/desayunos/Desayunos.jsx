import Footer from '../Footer/Footer';
import NavBarPage from '../navbar/NavBarPage';
import CarruselDesayunos from './CarruselDesayunos';
import './desayunos.css';
import { Link } from "react-router-dom"


function Desayunos() {
  return (
    <>
      <NavBarPage />
      <CarruselDesayunos />
      <section className="pasteles">
            <p className="desayunos">Desayunos</p>
            <p className="parrafoDesayuno">
              Damos servicios de banquetería para distintos eventos privados o familiares.<br />
              Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br />
              Se debe hacer la solicitud con al menos 10 días de anticipación.<br />
              Puede escribirnos al WhatsApp para más consultas.
            </p>
      </section>

      {/* Botón flotante de WhatsApp con mensaje predeterminado */}
      <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Quisiera%20cotizar%20el%20servicio%20de%20desayuno" target="_blank" rel="noopener noreferrer">
        <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
      </Link>

      <Footer />
    </>
  );
}

export default Desayunos;
