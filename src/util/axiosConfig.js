import axios from "axios";

// axios.defaults.withCredentials = true;
const instance = axios.create({
  // baseURL: "http://172.104.58.164:8080/erp-services/RestWS/runJson",
  baseURL: "https://cloudapi.moto.mn:8181/erp-services/RestWS/runJson",
  // baseURL: "https://veritech.moto.mn:8181/erp-services/RestWS/runJson",
  //   method: "post",
  //   type: "json",
  //   contentType: "application/json",
});

export default instance;
