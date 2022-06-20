import axios from "axios";

const instanceApi = axios.create({
  baseURL: "http://localhost:3001/",
  headers: { "X-Custom-Header": "foobar" },
});

export { instanceApi };
