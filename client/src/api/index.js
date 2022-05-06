import axios from "axios";
import CONSTANT from "../constants/constants"

const API = axios.create({ baseURL: CONSTANT.SERVER_URL });

export const addCar = (data) => API.post('/api/car/add', data);
export const carList = () => API.get('api/car/list');
export const deleteCar = (id) => API.delete(`api/car/${id}`);