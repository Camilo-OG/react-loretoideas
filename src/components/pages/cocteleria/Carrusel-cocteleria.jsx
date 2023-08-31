import Carousel from 'react-bootstrap/Carousel';


function CarruselCocteleria() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselCocteleria d-block w-100 carousel-image"
          src="img\testin2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselCocteleria d-block w-100 carousel-image"
          src="img\testin.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselCocteleria d-block w-100 carousel-image"
          src="img\testin4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselCocteleria;