import React, { useState } from "react";
import axios from "util/axiosConfig";
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

export function LoadProcess(props) {
  const myParams = myInitParamsProcess;
  myParams.request.command = props ? props.command : "";
  myParams.request.parameters = props ? props.parameters : {};

  // console.log("axiosFunction Process myParams ----------->", myParams);
  console.log("Axios props", props);

  return axios
    .post("", myParams)
    .then((response) => {
      if (response.data.response.status === "error") {
        message.error(response.data.response.text.toString(), 7);
        return {};
      } else {
        const myResult = response.data.response.result;
        return myResult;
      }
    })
    .catch((error) => {
      return error;
    });
}

// !-----------------------
// !-----------------------
// !-----------------------
const myInitParamsDataview = {
  request: {
    username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
    password: "89",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1587100905303413",
      ignorepermission: "1",
      showQuery: "0",
      // paging: {
      //   pageSize: "15", //нийтлэлийн тоо
      //   offset: "1", //хуудасны дугаар
      //   sortColumnNames: {
      //     id: {
      //       //эрэмбэлэх талбар
      //       sortType: "DESC", //эрэмбэлэх чиглэл
      //     },
      //   },
      // },
    },
  },
};

export function loadDataview(props) {
  const myParams = myInitParamsDataview;
  myParams.request.parameters.systemmetagroupid = props
    ? props.systemmetagroupid
    : "";
  myParams.request.parameters.criteria = props ? props.criteria : {};
  myParams.request.parameters.paging = props ? props.paging : {};
  return axios
    .post("", myParams)
    .then((response) => {
      // console.log("Цаанаас юу ирэв?", response);
      // console.log("Цаанаас юу ирэв? dfgsdfsdf", response.data.response.result);
      // console.log(
      //   "Цаанаас юу ирэв? dfgsdfsdf",
      //   response.data.response.result.paging
      // );

      if (response.data.response.status === "error") {
        message.error(response.data.response.text.toString(), 7);
        return [];
      } else {
        const myTempArray = response.data.response.result;
        delete myTempArray["aggregatecolumns"];
        delete myTempArray["paging"];

        const myArray = Object.values(myTempArray);
        return myArray;
      }
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      return [];
    });
}

export function loadDVObject(props) {
  const myParams = myInitParamsDataview;
  myParams.request.parameters.systemmetagroupid = props
    ? props.systemmetagroupid
    : "";
  myParams.request.parameters.criteria = props ? props.criteria : {};
  myParams.request.parameters.paging = props ? props.paging : {};
  return axios
    .post("", myParams)
    .then((response) => {
      // console.log("Цаанаас юу ирэв?", response);
      // console.log("Цаанаас юу ирэв? dfgsdfsdf", response.data.response.result);
      // console.log(
      //   "Цаанаас юу ирэв? dfgsdfsdf",
      //   response.data.response.result.paging
      // );

      if (response.data.response.status === "error") {
        message.error(response.data.response.text.toString(), 7);
        return [];
      } else {
        const myTempArray = response.data.response.result;
        // delete myTempArray["aggregatecolumns"];
        // delete myTempArray["paging"];
        // const myArray = Object.values(myTempArray);
        return myTempArray;
      }
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      return [];
    });
}
