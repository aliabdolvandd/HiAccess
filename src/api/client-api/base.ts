import axios from "axios";
const Axios = axios.create({
  baseURL: "https://backend-divar.liara.run",
});

export default Axios;
