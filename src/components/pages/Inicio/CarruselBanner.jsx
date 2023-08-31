import Carousel from 'react-bootstrap/Carousel';
import "./banner.css"


function CarruselBanner() {
  return (
    <Carousel data-bs-theme="light" className='contendor-carrusel-banner'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-banner"
          src="img/banner-1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-banner"
          src="img/banner-2.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselBanner;