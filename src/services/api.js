import axios from "axios";

const api = axios.create({
  baseURL: "https://itc-fvg-default-rtdb.firebaseio.com/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default api;
