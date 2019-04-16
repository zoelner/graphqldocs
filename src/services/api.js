import axios from "axios";

import { introspectionQuery } from "graphql";

const api = axios.create({
  baseURL: "http://devel.smartgreen.net.br:8000/graphql/",
  method: "post",
  data: {
    query: introspectionQuery
  }
});

export default api;
