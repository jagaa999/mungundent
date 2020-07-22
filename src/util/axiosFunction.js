import React, { useState } from "react";
import axios from "util/axiosConfig";

const myInitParamsProcess = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "motoNEWS_MAINDETAIL_004",
    parameters: {
      newsid: "",
      memberid: "",
    },
  },
};

export const LoadProcess = (props) => {
  const [myParams, setMyParams] = useState(myInitParamsProcess);
  setMyParams({
    ...myParams,
    command: props.command || "",
    parameters: props.parameters || {},
  });

  console.log("axiosFunction Process myParams ----------->", myParams);

  axios
    .post("", myParams)
    .then((response) => {
      console.log("axiosFunction Process response ----------->", response);

      const myArray = response.data.response.result;
      console.log("axiosFunction Process myArray ------------>", myArray);

      return myArray;
    })

    .catch((error) => {
      return error;
    });

  return null;
};

// !-----------------------
// !-----------------------
// !-----------------------
const myInitParamsDataview = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1587100905303413",
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

export function loadDataview(myState, setMyState, props) {
  const myParams = myInitParamsDataview;
  // console.log("myParams", myParams);
  // console.log("props", props);
  myParams.request.parameters.systemmetagroupid = props
    ? props.systemmetagroupid
    : "";
  myParams.request.parameters.criteria = props ? props.criteria : {};
  // console.log("axiosFunction Dataview myParams ----------->", myParams);

  axios
    .post("", myParams)
    .then((response) => {
      console.log("axiosFunction Dataview response ----------->", response);

      const myTempArray = response.data.response.result;
      console.log(
        "axiosFunction Dataview myTempArray ------------>",
        myTempArray
      );

      delete myTempArray["aggregatecolumns"];
      delete myTempArray["paging"];

      const myArray = Object.values(myTempArray);

      console.log(
        "axiosFunction Dataview myArray After Delete aggregatecolumns, paging ------------>",
        myArray
      );

      //console.log("props.setMyParams", setMyState);

      setMyState(...myState, myArray);

      return myArray;
    })

    .catch((error) => {
      return [];
    });

  return [];
}
