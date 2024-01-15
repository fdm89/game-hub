import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da450f320f1840a590e13c0645b506e1",
  },
});
