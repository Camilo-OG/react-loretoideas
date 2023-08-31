import axios from "axios";

const API = "https://backendloretoideas.onrender.com/";

export const registerRequest = (user) => axios.post(`${API}register`, user);
export const loginRequest = (user) => axios.post(`${API}login`, user);

