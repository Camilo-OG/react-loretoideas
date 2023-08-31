import axios from "axios"

const getTortasList = async () => {
  const url = "https://backendloretoideas.onrender.com/mostrar";
  const response = await axios.get(url);
  return response.data
}

const getTorta = async (id) => {
  try {
  const response = await axios.get("https://backendloretoideas.onrender.com/torta/mostraruno/" + id)
  return response.data
  } catch (error) {
    console.log("error en la solicitud",error)
  }
}

export default {getTortasList, getTorta}