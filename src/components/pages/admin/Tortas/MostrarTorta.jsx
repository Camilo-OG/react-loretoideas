import getTortasList from "../../../../controllers/getTortasList";
import { useState, useEffect } from "react";
import '../Tartaletas/mostrarProductos.css'

export default function MostrarTorta() {
  /* Llamada de API */
  const [tortasList, setTortasList] = useState([]);
  const updateTortas = async () => {
    const newTortasList = await getTortasList.getTortasList();
    setTortasList(newTortasList);
  };
  useEffect(() => {
    updateTortas();
  }, []);

  function transformarArray (str) {
    const array = JSON.parse(str)
    const numeros = array.map((element) => parseFloat(element));
    return numeros
  }

  const url = 'img/'
  return (
    <>
    

    <div className="cuerpo-formulario container">
      <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th className="item">Nombre</th>
            <th className="item">Descripcion</th>
            <th className="item">Porcion y precio</th>
            <th className="item">Estado</th>
            <th className="item">Imagen</th>
          </tr>
        </thead>
        <tbody className="table-group-divider" id="contenedor-tabla">
        {tortasList.map((torta) => (
            <tr key={torta._id}>
              <td className="align-middle">{torta.nombre}</td>
              <td className="align-middle">{torta.descripcion}</td>
              <td className="align-middle">               
                <ul>
                   <li>{transformarArray(torta.porciones)[0]} porciones - $ {transformarArray(torta.precio)[0]}</li>
                   <li>{transformarArray(torta.porciones)[1]} porciones - $ {transformarArray(torta.precio)[1]}</li>
                   <li>{transformarArray(torta.porciones)[2]} porciones - $ {transformarArray(torta.precio)[2]}</li>
                   <li>{transformarArray(torta.porciones)[3]} porciones - $ {transformarArray(torta.precio)[3]}</li>
                   <li>{transformarArray(torta.porciones)[4]} porciones - $ {transformarArray(torta.precio)[4]}</li>
                </ul>
              </td>
              <td className="align-middle">{torta.status}</td>
              <td className="align-middle"><img className="img-tabla" src={url+torta.imagen} alt={torta.img_descripcion} /></td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
    </div>
    
    </>
  )
}
