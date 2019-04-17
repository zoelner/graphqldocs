import axios from "axios";
import config from "../config";
import { introspectionQuery } from "graphql";

const api = axios.create({
  baseURL: config.url,
  method: "post",
  data: {
    query: introspectionQuery
  }
});

export default api;
