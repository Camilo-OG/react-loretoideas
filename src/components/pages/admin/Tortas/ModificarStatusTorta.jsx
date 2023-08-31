import { useState, useEffect } from "react";
import getTortasList from "../../../../controllers/getTortasList";
import axios from "axios";

export default function ModificarStatusTorta() {
  /* Llamada de API */
  const [tortasList, setTortasList] = useState([]);
  const updateTortas = async () => {
    const newTortasList = await getTortasList.getTortasList();
    setTortasList(newTortasList);
  };
  useEffect(() => {
    updateTortas();
  }, []);
  /* Selector de valor */
  const [selectedValue, setSelectedValue] = useState("");
  const selectValue = async (e) => {
    setSelectedValue(e.target.value);
  };
  /* Selector de status */
  const [statusValue, setStatusValue] = useState('')
  
  const id = selectedValue

  const enviarDatos = async ()=>{
  
        try {
          await axios.put('https://backendloretoideas.onrender.com/modificar/'+id, {status: statusValue})
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
          console.log('algo salio mal al conectarse a la base de datos',error)
        });
        } catch (error) {
          console.log('algo salio mal',error)
          
        }
      
  }

  return (
    <>
   

    <div className="cuerpo-formulario container">

      <div className="titulo-admi row">
        <div className="ingreso col-12 text-center">
          <h3 className="titulo">Modificar Estatus de Torta</h3>
        </div>
      </div>
      
        <form action="" id="formulario-admi">
          <div className="col-12 columna-grande">

          <label htmlFor="selected-id" className="form-label etiqueta-grande">
            Producto a modificar:
          </label>
          <select
            className="form-select"
            id="select-id"
            aria-label="Default select example"
            value={selectedValue}
            onChange={selectValue}
          >
            <option value={""}> Seleccione producto para modificar:</option>
            {tortasList.map((torta) => (
              <option key={torta._id} value={torta._id}>
                {torta.nombre} -Estado: {torta.status}
              </option>
            ))}
          </select>
          </div>
          <div className="col-12 columna-grande">

          <label htmlFor="modify-value" className="form-label etiqueta-grande">
            Ingrese el nuevo valor:
          </label>
          <select
            className="form-select"
            id="modify-value"
            aria-label="Default select example"
            value={statusValue} 
            onChange={(e)=> setStatusValue(e.target.value)} >
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
  );
}
