import "../productos/productos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import getTortasList from "../../../controllers/getTortasList";
import { useEffect, useState } from "react";
import CardProductos from "./CardTortas";
import getTartaletasList from "../../../controllers/getTartaletasList";
import CardTartaleta from "./CardTartaleta";
import CarruselProducto from "./CarruselProducto"

export default function BotonesProductos() {
  const [tortasList, setTortasList] = useState([]);
  const [tartaletasList, setTartaletasList] = useState([]);
  const [activarBoton, setActivarBoton] = useState('');

  const updateTortas = async (boton) => {
    setActivarBoton(boton);
    const newTortasList = await getTortasList.getTortasList();
    setTortasList(newTortasList);
    setCarrusel(false)
    
  };
  const updateTartaletas = async (boton) => {
    setActivarBoton(boton);
    const newTartaletasList = await getTartaletasList.getTartaletasList();
    setTartaletasList(newTartaletasList);
    setCarrusel(false)
   
  };
  const ocultarProductos = (boton)=>{
    setActivarBoton(boton);
    setTartaletasList([])
    setTortasList([])
    setCarrusel(true)
    
  }
  useEffect(() => {
    updateTortas();
    updateTartaletas();

  }, []);
  
  const [carrusel, setCarrusel] = useState(false)
  

  return (
    <>
      <section className="mt-1 imagen-fondo">
        <div className="container-fluid pt-2 pb-2">
          <div className="row d-flex align-content-center ">
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button
                onClick={() => updateTortas(1) && setTartaletasList([])}
                className={activarBoton === 1 ? 'btn boton-activo' : 'btn botones'}
              >
                Tortas
              </button>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button
                onClick={() => updateTartaletas(2) && setTortasList([])}
                className={activarBoton === 2 ? 'btn boton-activo' : 'btn botones'}
              >
                Kuchen & Tartas
              </button>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 btn-ref">
              <button 
              className={activarBoton === 3 ? 'btn boton-activo' : 'btn botones'}
              onClick={() => ocultarProductos(3)}>
                Extras
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-1 d-flex " id="contenedor-card">
            {tortasList
              .filter((torta) => torta.status === "ACTIVO")
              .map((torta) => (
                <CardProductos
                  key={torta._id}
                  nombre={torta.nombre}
                  precio={JSON.parse(torta.precio)}
                  porciones={JSON.parse(torta.porciones)}
                  imagen={torta.imagen}
                  img_descripcion={torta.img_descripcion}
                  descripcion={torta.descripcion}
                />
              ))}
            {tartaletasList
              .filter((tartaleta) => tartaleta.status === "ACTIVO")
              .map((tartaleta) => (
                <CardTartaleta
                  key={tartaleta._id}
                  nombre={tartaleta.nombre}
                  descripcion={tartaleta.descripcion}
                  precio={tartaleta.precio}
                  diametro={tartaleta.diametro}
                  imagen={tartaleta.imagen}
                  img_descripcion={tartaleta.img_descripcion}
                />
              ))}
              {carrusel && <CarruselProducto/>}
          </div>
        </div>
      </section>
    </>
  );
}
