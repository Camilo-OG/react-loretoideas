import Carousel from 'react-bootstrap/Carousel';


function CarruselProducto() {
  return (
    <div className="contenedor-carrusel-producto">

    <Carousel data-bs-theme="dark" className='carrusel-item carrusel-contenedor'>
      <Carousel.Item >
        <img
          className="d-block w-100 carrusel-producto"
          src="img\alfajores-6.PNG"
          alt="alfajores caseros para regalo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\alfajores-12.PNG"
          alt="alfajores caseros para regalo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\alfajores-15.PNG"
          alt="alfajores caseros para regalo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\alfajores-espumante.PNG"
          alt="alfajores y espumante"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\alfajores-espumante-copa.PNG"
          alt="alfajores espumante y copa en caja de regalo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-producto"
          src="img\tazon-alfajores.PNG"
          alt="caja de regalo tazon y alfajores"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarruselProducto;