import axios from "axios"

const getTartaletasList = async () => {
  const url = "https://backendloretoideas.onrender.com/tartaleta/mostrartartaletas";
  const response = await axios.get(url);
  return response.data
}

const getTartaleta = async (id) => {
  try {
  const response = await axios.get("https://backendloretoideas.onrender.com/tartaleta/mostraruno/" + id)
  return response.data
  } catch (error) {
    console.log("error en la solicitud",error)
  }
}
export default {getTartaletasList, getTartaleta}