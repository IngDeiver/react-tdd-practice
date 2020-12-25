import axios from "axios";
const baseUri = process.env.REACT_APP_SERVER_URI;
const headers = { "content-type": "application/json" };
const list = () => {
  return axios.get(baseUri);
};

const add = (task) => {
  return axios.post(baseUri, { ...task }, { headers });
};

const update = (id, task) => {
  return axios.put(baseUri + "/" + id, { ...task }, { headers });
};

const remove = (id) => {
  return axios.delete(baseUri + "/" + id);
};

export { list, add, update, remove };
