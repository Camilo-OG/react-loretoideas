import React, { useState } from 'react';
import CarritoP2 from './CarritoPaso2'; // Importa el componente CarritoP2
import CarritoP3 from './CarritoPaso3'; // Importa el componente CarritoP3

function PasosCarrito() {
  const [pasoActual, setPasoActual] = useState(1);
  const [mostrarVista3, setMostrarVista3] = useState(false);

  const cambiarPaso = (paso) => {
    setPasoActual(paso);

    if (paso === 3) {
      setMostrarVista3(true);
    } else {
      setMostrarVista3(false);
    }
  };

  return (
    <div className="container-cart">
      {/* Botones de paso */}
      <div className="d-flex justify-content-center mt-3 spaced-buttons">
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title">Pedido</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 1 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(1)}
          >
            1
          </button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title">Añadidos</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 2 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(2)}
          >
            2
          </button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="btn-title">Enviado</span>
          <button
            className={`btn btn-primary rounded-circle${pasoActual === 3 ? '' : pasoActual}`}
            onClick={() => cambiarPaso(3)}
          >
            3
          </button>
        </div>
      </div>

      {/* Renderiza el formulario del paso 2 si el paso actual es 2 */}
      {pasoActual === 2 && <CarritoP2 />}

      {/* Mostrar el componente CarritoP3 si mostrarVista3 es true */}
      {mostrarVista3 && <CarritoP3 />}
    </div>
  );
}

export default PasosCarrito;
