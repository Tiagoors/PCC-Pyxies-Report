import axios from "axios";

const instanceApi = axios.create({
  baseURL: "http://localhost:3333/",
  headers: { "X-Custom-Header": "foobar" },
});

export { instanceApi };
