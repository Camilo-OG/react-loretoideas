import 'bootstrap/dist/css/bootstrap.min.css';
import'./Footer.css';
import { Link } from "react-router-dom"



function Footer(){
    return(
    //    Footer
    <footer id="Footer" className='container-fluid' >
        {/* Contenedor de los elementos flex 1 y 2 */}
        <div className='cuerpo-footer'>
            <div className='alineacion row'>
                <div className='contacto col'>
                  <p className='datos-contacto'>CONTACTO: <br></br>
                    Fono: +56 932939888 <br></br>
                    E-mail: loreto.ideas.reposteria@gmail.com</p>
                </div>
                {/* Elemento 2 de la izquierda que contiene los logos (responsivo) */}
                <div className='iconos col'>
                <Link to="https://www.instagram.com/loreto_ideas/?hl=es-la" target="_blank" rel="noopener noreferrer">
                    <img className="instagram" src="icons/instagram.png" alt="instagram" />
                </Link>
                <Link to="https://web.facebook.com/profile.php?id=100063544153621" target="_blank" rel="noopener noreferrer">
                    <img className="facebook" src="icons/Facebook.png" alt="facebook" />
                </Link>                  
                <Link to="https://www.sercotec.cl/" target="_blank" rel="noopener noreferrer">
                    <img className="sercotec" src="icons\sercotec(2).jpg" alt="sercotec"/>
                </Link>    
                </div>
            </div>
            <div className='row'>
            {/* !--Texto inferior de los derechos reservado */}
           </div>
            <div className='text-center mt-4'>
                <p className='derechos'>Loreto Ideas 2023® | Todos los derechos reservados</p>
            </div>
        </div>

    </footer>

    )
}

export default Footer;