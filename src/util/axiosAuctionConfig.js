import axios from "axios";

const instance = axios.create({
  // baseURL: "https://50.23.198.149/xml/json",
  baseURL:
    "https://50.23.198.149/xml/json?code=Lms7sw3_Cbna&sql=select%20*%20from%20main%20limit%2010",
});

export default instance;
