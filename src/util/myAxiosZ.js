import axios, { ecomZ, decomZ } from "./axiosConfig";
import { message } from "antd";

const myAxiosZ = (myPlainParams) => {
  return new Promise((resolve, reject) => {
    const myLastParam = {
      ...myPlainParams,
      request: {
        ...myPlainParams.request,
        zip: 1,
      },
    };

    // console.log("myLastParammyLastParam", myLastParam);

    const myLastRequest = ecomZ(myLastParam);
    axios
      .post("", myLastRequest, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        // console.log("ppppppp", response);
        const myData = decomZ(response.data);
        // console.log("sssssssss", myData);
        resolve(myData);
      })
      .catch((error) => {
        // console.log("error", error);
        message.error(error.toString(), 7);
        reject(error);
      });
  });
};

export default myAxiosZ;
