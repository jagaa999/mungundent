import axios from "axios";

const instance = axios.create({
  // baseURL: "http://172.169.88.11:8080/erp-services/RestWS/runJson",
  baseURL: "https://dev.veritech.mn:8181/erp-services/RestWS/runJson",
});

export default instance;
