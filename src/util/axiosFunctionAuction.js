import axios from "axios";

import { stringify } from "query-string";

import { message } from "antd";

export function loadDataviewAuction(props) {
  const myParams = { ...props };

  // console.log("myParamsmyParams", myParams);
  return axios
    .get(
      "https://us-central1-moto-86243.cloudfunctions.net/loadAuction?" +
        stringify(myParams)
    )

    .then((response) => {
      // console.log("DDDDDDDDDDD", response);
      return response.data.response;
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      // console.log("EEEEEEE", error);
    });
}
