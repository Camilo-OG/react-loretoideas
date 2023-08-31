import CarruselNosotros1 from "./CarruselNosotros1";
import CarruselNosotros2 from "./CarruselNosotros2";
import Footer from "../Footer/Footer";
import NavBarPage from "../navbar/NavBarPage";
import "./nosotros.css";
import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <>
      <NavBarPage />
      <CarruselNosotros1 />
      <section className="pasteles">
        <div className="background">
          <div className="circle borde">
            <img
              src="img/foto perfil.jpg"
              className="img-nosotros"
              alt="Imagen receptiva"
            />
          </div>
        </div>

        <section className="text">
          <p className="repostera">Repostera</p>
          <p className="descripcionNosotros">
            Hola soy Loreto Jiménez, la repostera y dueña de este maravilloso
            negocio el cual partió solo como una idea y fue creciendo día a día
            gracias a las recomendaciones y confianza que han puesto nuestros
            clientes en todos los productos que hemos elaborado. <br /> Llevamos
            seis años creando cada día nuevas preparaciones siempre priorizando
            un producto personalizado y de excelente calidad. <br />
            Preparamos con amor cada detalle de tu producto.
          </p>
        </section>

        <div className="separator">
          <img
            className="mx-auto d-block"
            src="icons/Logo-loretoideas.png"
            alt=""
          />
        </div>

        <p className="abajo">Premios y Actividades</p>
        <p className="descripcionNosotros">
          Hemos participado en distintos eventos y convocatorias del pais para
          cada dia poder mejorando nuestras habilidades en el area de reposteria
          y pasteleria. <br /> Orgullosamente hemos obtenido los mejores lugares
          en varios eventos de gastronomía en la región metropolitana y también
          participamos en distintas convocatorias de Sercotec para mostrar como
          nosotros a través de estos fondos concursables pudimos crear nuestra
          pyme.
        </p>
      </section>
      <Link
        className="whatsapp-float"
        to="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20Loreto%20Ideas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="whatsapp" src="icons\wspp.png" alt="whatsapp" />
      </Link>
      <CarruselNosotros2 />
      <Footer />
    </>
  );
}

export default Nosotros;
