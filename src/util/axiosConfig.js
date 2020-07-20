import axios from "axios";

// axios.defaults.withCredentials = true;
const instance = axios.create({
  // baseURL: "http://172.104.58.164:8080/erp-services/RestWS/runJson",
  baseURL: "https://moto.mn:8181/erp-services/RestWS/runJson",
  //   method: "post",
  //   type: "json",
  //   contentType: "application/json",
});

export default instance;

// reqwest({
//     url: 'http://172.104.58.164:8080/erp-services/RestWS/runJson',
//     // url: {process.env.motoJsonUrl},
//     method: 'post',
//     type: 'json',
//     contentType: 'application/json',
//     data: JSON.stringify(myparams)
//   }).then(data => {

// const myparams = {
//     "request": {
//         "sessionid": "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
//         "command": "PL_MDVIEW_004",
//         "parameters": {
//             //"systemmetagroupid": "1587100905303413",
//             "systemmetagroupid": "1587197820548033",
//             "showQuery": "0",
//             "paging": {
//                 "pageSize": params.results || "15", //нийтлэлийн тоо
//                 "offset":   params.page || "1",     //хуудасны дугаар
//                 "sortColumnNames" : {
//                   "publisheddate" : {               //эрэмбэлэх талбар
//                       "sortType" : "DESC",          //эрэмбэлэх чиглэл
//                   }
//                 }
//             }
//         }
//     }
//   };
