import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './Inicio.css'
import Footer from "../Footer/Footer";
import NavBarPage from "../navbar/NavBarPage";
import { Link } from "react-router-dom";
import CarruselBanner from "./CarruselBanner";
import DarkVariantExample from "./Carrusel-inicio";



function ShapeExample() {
  return ( 
  <>
    <NavBarPage/>
  
        <div className="viewport inicio-fondo">

        <div className=" container-fluid contenedor-principal-texto w100">
        <CarruselBanner/>
      <Row className="botones-inicio">
        <Col xs={4} md={4} className="contendor-boton">
          <Image
            src=""
            className="boton-inicio-img"
          />
        </Col>
        <Col xs={4} md={4} className="contendor-boton2">
          <Image
            src=""
            className="boton-inicio-img"
          />
        </Col>
        <Col xs={4} md={4}className="contendor-boton3">
          <Image
            src=""
            className="boton-inicio-img"
          />
        </Col>
      </Row>
      <Row className="texto-botones-inicio">
        <div className="col-4 col-md-4 contenedor-texto">
        <Link className="titulo-boton" to="/productos">
          Productos
        </Link>
        </div>
        <div className="col-4 col-md-4 contenedor-texto">
        <Link className="titulo-boton" to="/desayunos">
          Desayunos
        </Link>
        </div>
        <div className="col-4 col-md-4 contenedor-texto">
        <Link className="titulo-boton" to="/concteleria">
          Coctelería
        </Link>
        </div>
      </Row>
      <p className="caja-texto-mobile">
      Trabajamos con los mejores ingredientes del país para entregar la mejor calidad a nuestros clientes, porque todos los productos son creados con amor y se nota en el sabor.
      </p>

      <p className="caja-texto">
      
      ¡Bienvenidos a Loreto Ideas! Nuestra pasión por la calidad nos lleva a
          trabajar exclusivamente con los ingredientes más frescos y de mayor
          calidad. Nuestra pastelera se esfuerza por transformar estos
          ingredientes de primera en obras de arte comestibles que deleitarán
          tus sentidos.  !Te estamos esperando para endulzar tu día!
      </p>
    </div>
     <Link className="whatsapp-float" to="https://api.whatsapp.com/send?phone=56975688406&text=Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20Loreto%20Ideas" target="_blank" rel="noopener noreferrer">
    <img className="whatsapp" src="icons\wspp.png" alt="whatsapp"/>
  </Link>
  
    <DarkVariantExample/>
    <Footer/>
    </div>
    </>
  );
}

export default ShapeExample;