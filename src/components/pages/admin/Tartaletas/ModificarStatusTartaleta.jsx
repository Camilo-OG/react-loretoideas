import { useState, useEffect } from "react";
import getTartaletasList from "../../../../controllers/getTartaletasList";
import axios from "axios";
import './CrearTartaleta.css';

export default function ModificarStatusTartaleta() {
  /* Llamada de API */
  const [tartaletasList, setTartaletasList] = useState([]);
  const updateTartaletas = async () => {
    const newTartaletasList = await getTartaletasList.getTartaletasList();
    setTartaletasList(newTartaletasList);
  };
  useEffect(() => {
    updateTartaletas();
  }, []);
  /* Selector de valor */
  const [selectedValue, setSelectedValue] = useState("");
  const selectValue = (e) => {
    setSelectedValue(e.target.value);
  };
  const [statusValue, setStatusValue] = useState('')

  const selectStatusValue = (e)=> {
    setStatusValue(e.target.value)
  }
  const id = selectedValue

  const enviarDatos = async ()=>{
    try {
      await axios.put('https://backendloretoideas.onrender.com/tartaleta/modificartartaleta/'+id, {status: statusValue})
      .then((response)=> {
        console.log({
          Origen: "Recibiendo respuesta de la API",
          status: response.status,
          statusText: response.statusText,
          response: response.data,
      });
        if (response.status === 200) {
          alert(`Producto modificado correctamente`);
        } else {
          alert("Error al modificar el producto");
          console.log("no esta recibiendo el status 200")
          response.status(400).json({msg: "error al modificar el producto"})
        }
      })
      .catch(function (error) {
        console.log(error);
        });} 
    catch (error) {
      console.log('algo salio mal',error)     
    }  
  }

  return (
    <>
      <div className="cuerpo-formulario container">
        <div className="titulo-admi row">
          <div className="ingreso col-12 text-center">
            <h3 className="titulo">Modificar Estado Tartaleta</h3>
          </div>
        </div>
        
          <form action=""id="formulario-admi" >
          <div className="col-12 columna-grande">
          
            <label htmlFor="select-id" className="form-label etiqueta-grande">
              Producto a modificar:
              </label>
              <select
            className="form-select"
            id="select-id"
            aria-label="Default select example"
            value={selectedValue} 
            onChange={selectValue} 
          >
            <option value={''}>
              Seleccione producto para modificar:
            </option>
            {tartaletasList.map((tartaleta) => (
              <option key={tartaleta._id} value={tartaleta._id}>
                {tartaleta.nombre} -Estado: {tartaleta.status}
              </option>
            ))}
          </select>
          </div>
          <div className="col-12 columna-grande">
            <label htmlFor="modify-value" className="form-label etiqueta-grande">
              Ingrese el nuevo valor:
            </label>
            <select
              className="form-select "
              id="modify-value"
              aria-label="Default select example"
              value={statusValue} 
              onChange={selectStatusValue} >
              <option value={''}>Nuevo Valor</option>
              <option value="ACTIVO">ACTIVO</option>
              <option value="INACTIVO">INACTIVO</option>
            </select>
            </div>          
            <div className="col-12 div-boton-accion">
              <button type="button" id="agregar" className="boton-agregar btn btn-primary" onClick={()=> enviarDatos()}>
                Actualizar Producto
              </button>
            </div>
          </form>
      </div>

    
    </>
  )
}
