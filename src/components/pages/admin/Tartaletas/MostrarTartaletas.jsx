import getTartaletasList from "../../../../controllers/getTartaletasList";
import { useState, useEffect } from "react";
import './mostrarProductos.css'

export default function MostrarTartaletas() {

  /* Llamada de API */
  const [tartaletasList, setTartaletasList] = useState([]);
  const updateTartaletas = async () => {
    const newTartaletasList = await getTartaletasList.getTartaletasList();
    setTartaletasList(newTartaletasList);
  };
  useEffect(() => {
    updateTartaletas();
  }, []);

  const url = 'img/'

  return (
    <>
      

    <div className="cuerpo-formulario container-fluid">
      <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th className="item">Nombre</th>
            <th className="item">Descripcion</th>
            <th className="item">Diametro</th>
            <th className="item">Precio</th>
            <th className="item">Estado</th>
            <th className="item">Imagen</th>
          </tr>
        </thead>
        <tbody className="table-group-divider" id="contenedor-tabla">
        {tartaletasList.map((tartaleta) => (
            <tr key={tartaleta._id}>
              <td className="align-middle">{tartaleta.nombre}</td>
              <td className="align-middle">{tartaleta.descripcion}</td>
              <td className="align-middle diametro">{tartaleta.diametro}</td>
              <td className="align-middle">${tartaleta.precio}</td>
              <td className="align-middle">{tartaleta.status}</td>
              <td className="align-middle"><img className="img-tabla" src={url+tartaleta.imagen} alt={tartaleta.img_descripcion} /></td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
    </div>
    
    </>
  )
}
