import CrearTartaleta from "./Tartaletas/CrearTartaleta";
import ModificarStatusTartaleta from "./Tartaletas/ModificarStatusTartaleta";
import ModificarFullTartaleta from "./Tartaletas/ModificarFullTartaleta";
import MostrarTartaletas from "./Tartaletas/MostrarTartaletas";
import CrearTorta from "./Tortas/CrearTorta";
import ModificarFullTorta from "./Tortas/ModificarFullTorta";
import ModificarStatusTorta from "./Tortas/ModificarStatusTorta";
import MostrarTorta from "./Tortas/MostrarTorta";
import { useState } from "react";

export default function FuncionesAdmin() {
  const [verTorta, setVerTorta] = useState(false)
  
  
  

  return (
    <section className="funcionesAdmin" id='funcionesAdmin'>
      {verTorta && <MostrarTorta/>}
      
      
    </section>
  )
}
