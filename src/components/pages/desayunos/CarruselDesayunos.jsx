import Carousel from 'react-bootstrap/Carousel';


function CarruselDesayunos() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carruselDesayuno d-block w-100 carousel-image"
          src="img\testin2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselDesayuno d-block w-100 carousel-image"
          src="img\testin.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carruselDesayuno d-block w-100 carousel-image"
          src="img\padesayunito.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselDesayunos;