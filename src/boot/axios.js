import { boot } from "quasar/wrappers";
import axios from "axios";

const apiRU = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export default boot(({ app }) => {});

export { apiRU };
