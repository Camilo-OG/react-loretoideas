import "bootstrap/dist/css/bootstrap.min.css";
import "./Detalles.css";

function Detalles() {
  return (
    <>
      <div className="mitad-arriba">
        <button href="#">
          <img className="flecha" src="icons/flecha naranja.png" alt="flecha" />
        </button>
        <a href="#">
          <img
            className="kuchen"
            src="img/img-sinFondo/kuchen.png"
            alt="kuchen"
          />
        </a>
        <div className="contenedor">
          <div className="izquierda">
            Medidas
            <div className="medidas">S M L</div>
            Disponible: 06
          </div>
          <div className="derecha">
            <a href="#">
              <img className="corazon" src="icons/Me-gusta.png" alt="corazon" />
            </a>
            <br></br>
            $7.990
          </div>
        </div>
      </div>

      <div className="mitad-abajo">
        <p className="titulo"> Kuchen Mora </p>
        Masa de migas con fruta de mora y mermeladas.
        <div className="medidas-productos">
          <ul className="lista-productos">
            <li className="item-lista">Medidas</li>
            <li className="item-lista">S= 8 personas.</li>
            <li className="item-lista">M= 10 personas.</li>
            <li className="item-lista"> L= 12 personas.</li>
          </ul>
        </div>
        <div className="agregar">
          <a href="#">Agregar</a>
          <img className="carrito" src="icons/carrito.png" alt="carrito" />
        </div>
      </div>
    </>
  );
}

export default Detalles;
