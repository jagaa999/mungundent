import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "axios";
import axiosDev from "util/axiosDevConfig";
import myAxiosZ from "util/myAxiosZ";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import {
  prepareWidgetSetting,
  prepareWidgetData,
} from "../util/prepareWidgetSetting";
import { runRenderEngine } from "util/runRenderEngine";

const WidgetContext = React.createContext();

//   #####  ####### ####### ######  #######
//  #     #    #    #     # #     # #
//  #          #    #     # #     # #
//   #####     #    #     # ######  #####
//        #    #    #     # #   #   #
//  #     #    #    #     # #    #  #
//   #####     #    ####### #     # #######
export const WidgetStore = (props) => {
  const initialWidgetData = {
    widgetData: {},
    widgetSetting: {},
    loading: false,
    error: null,
  };
  const [widgetData, setWidgetData] = useState(initialWidgetData);
  const [widgetJson, setWidgetJson] = useState([]);

  useEffect(() => {
    const myJson = runRenderEngine(
      widgetData.widgetSetting,
      widgetData.widgetData
    );
    // console.log("myJson", myJson);
    setWidgetJson(myJson);
  }, [widgetData]);

  //  ######     #    #######    #
  //  #     #   # #      #      # #
  //  #     #  #   #     #     #   #
  //  #     # #     #    #    #     #
  //  #     # #######    #    #######
  //  #     # #     #    #    #     #
  //  ######  #     #    #    #     #

  const loadWidgetData = (id = "0") => {
    setWidgetData({
      ...widgetData,
      loading: true,
      error: "",
    });

    const myDataParams = {
      request: {
        username: "batbayar",
        password: "89",
        command: "contentHdrInfo_004",
        parameters: {
          filterId: id || "16091375164842",
        },
      },
    };

    const mySettingParams = {
      request: {
        username: "batbayar",
        password: "89",
        ad: "false",
        command: "PROCESS_CONFIG_GET",
        parameters: {
          metadataid: "16110390226081",
        },
      },
    };

    axiosDev
      .post("", myDataParams)
      .then(async (response) => {
        if (response.data.response.status !== "success") {
          console.log("Error: -- ", response.data.response.text);
          message.error(response.data.response.text, 7);
          return null;
        }
        const myResult = response.data.response.result;

        await axiosDev
          .post("", mySettingParams)
          .then((response) => {
            // console.log("ИРСЭН mySetting:   ", response);
            if (response.data.response.status !== "success") {
              console.log("Error: -- ", response.data.response.text);
              message.error(response.data.response.text, 7);
            }

            const myResultSetting = prepareWidgetSetting(
              response.data.response.result
            );

            // const myResultData = prepareWidgetData(myResult, myResultSetting);
            const myResultData = prepareWidgetData(myResult);

            console.log(" ЯНЗАЛСАН SETTING", myResultSetting);
            console.log(" ЯНЗАЛСАН ДАТА", myResultData);

            setWidgetData({
              ...widgetData,
              widgetData: myResultData,
              widgetSetting: myResultSetting,
              loading: false,
              error: "",
            });
            // return "dgfd gfdg fdg dfg";
            // setWidgetData({
            //   ...widgetData,
            //   widgetSetting: myResult,
            //   loading: false,
            //   error: "",
            // });
          })
          .catch((error) => {
            console.log("error", error);
          });

        // let myWidgetSetting = await loadWidgetSetting("16110390226081");
        // loadWidgetSetting("16110390226081").then((data) => {
        //   console.log("dddddddddddd", data);
        // });
        // console.log("tttttttttt", myWidgetSetting);
      })
      .catch((error) => {
        console.log("error", error);
        // message.error(error, 7);
      });
  };

  return (
    <WidgetContext.Provider
      value={{
        widgetData,
        loadWidgetData,
        widgetJson,
        setWidgetJson,
      }}
    >
      {props.children}
    </WidgetContext.Provider>
  );
};

export default WidgetContext;
