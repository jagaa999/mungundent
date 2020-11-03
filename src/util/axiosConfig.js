import axios from "axios";
import pako from "pako";

export const ecomZ = (json) => {
  var encoded = unescape(encodeURIComponent(JSON.stringify(json)));
  var charData = encoded.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  var zippedResult = pako.gzip(charData, { to: "string" });

  var ss = btoa(zippedResult);
  return ss;
};

export const decomZ = (b64Data) => {
  var strData = atob(b64Data);
  var charData = strData.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  var binData = new Uint16Array(charData);
  var data = pako.inflate(binData);
  try {
    var strData = new Uint8Array(data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "");
  } catch (ex) {
    console.log(ex);
  }
  var result = decodeURIComponent(escape(strData));
  return JSON.parse(result.replace(/\t/g, ""));
};

// axios.defaults.withCredentials = true;
const instance = axios.create({
  // baseURL: "http://172.104.58.164:8080/erp-services/RestWS/runJson",
  // baseURL: "https://172.104.58.164:8181/erp-services/RestWS/runJson",
  baseURL: "https://cloudapi.moto.mn:8181/erp-services/RestWS/runJsonz",
  // baseURL: "https://cloudapi.moto.mn:8181/erp-services/RestWS/runJson",
  // baseURL: "https://veritech.moto.mn:8181/erp-services/RestWS/runJson",
  //   method: "post",
  //   type: "json",
  //   contentType: "application/json",
});

export default instance;
