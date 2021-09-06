import axios from "axios";
const url = "http://10.1.1.183:3001/persons";

const getAll = async () => {
  const request = axios.get(url);
  const response = await request;
  return response.data;
};

const create = async (newObject) => {
  const request = axios.post(url, newObject);
  const response = await request;
  return response.data;
};

const remove = async (id, newObject) => {
  const request = axios.delete(`${url}/${id}`, newObject);
  const response = await request;
  return response.data;
};

const services = { getAll, create, remove };

export default services;
