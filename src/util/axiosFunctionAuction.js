import React, { useState } from "react";
import axios from "util/axiosConfig";
import axiosAuction from "util/axiosAuctionConfig";
import axios1 from "axios";

import { stringify } from "query-string";

import { message } from "antd";

const myInitParamsProcess = {
  request: {
    // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
    password: "89",
    command: "motoNEWS_MAINDETAIL_004",
    parameters: {
      // newsid: "",
      // memberid: "",
    },
  },
};

export function LoadProcessAuction(props) {
  return null;

  // const myParams = myInitParamsProcess;
  // myParams.request.command = props ? props.command : "";
  // myParams.request.parameters = props ? props.parameters : {};

  // // console.log("axiosFunction Process myParams ----------->", myParams);
  // console.log("Axios props", props);

  // return axios
  //   .post("", myParams)
  //   .then((response) => {
  //     if (response.data.response.status === "error") {
  //       message.error(response.data.response.text.toString(), 7);
  //       return {};
  //     } else {
  //       const myResult = response.data.response.result;
  //       return myResult;
  //     }
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
}

const myInitParamsDataview = {
  code: "Lms7sw3_Cbna",
};

export function loadDataviewAuction(props) {
  const myParams1 = { ...myInitParamsDataview, ...props };

  // console.log("myParams1myParams1", myParams1);
  const myParams = stringify(myParams1);
  // console.log("myParamsmyParams", myParams);

  return axios1
    .get(
      "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json" +
        "?" +
        myParams,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((response) => {
      // console.log("DDDDDDDDDDD", response);
      return response.data;
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      // console.log("EEEEEEE", error);
    });
}
