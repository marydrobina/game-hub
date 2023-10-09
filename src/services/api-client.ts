import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "42725ce6d5f342a4a34c46723cd8d96e",
  },
});
