import Footer from '../Footer/Footer';
import NavBarPage from '../navbar/NavBarPage';
import CarruselCocteleria from './Carrusel-cocteleria';
import '../cocteleria/cocteleria.css';
import BotonWsp from '../../Wsp/BotonWsp';



function Cocteleria() {
  return (
    <>
    <NavBarPage/>
    <CarruselCocteleria/>
    <section className='pasteles'>
          <p className='cocteleria'>Cocteleria</p>
          <p className='parrafoCocteleria'>Damos servicios de banquetería para distintos eventos privados o familiares.<br/>
            Se pueden crear menús salados, dulces o mixtos, según lo que necesite el cliente.<br/>
            Se debe hacer la solicitud con al menos 10 días de anticipación.<br/>
            Puede escribirnos al WhatsApp para más consultas.</p>
    </section>
    <Footer/>
    <BotonWsp/>
    </>
  )
}
export default Cocteleria