import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "axios";
import axiosDev from "util/axiosDevConfig";
import myAxiosZ from "util/myAxiosZ";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const WidgetContext = React.createContext();

export const WidgetStore = (props) => {
  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialWidgetData = {
    widgetData: {},
    loading: false,
    error: null,
  };

  const [widgetData, setWidgetData] = useState(initialWidgetData);

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

    const myParams = {
      request: {
        username: "batbayar",
        password: "89",
        command: "contentHdrInfo_004",
        parameters: {
          filterId: id || "16091375164842",
        },
      },
    };

    console.log("myParams :   ", myParams);

    axiosDev
      .post("", myParams)
      .then((response) => {
        console.log("ИРСЭН ДАТА444:   ", response);
        if (response.data.response.status !== "success") {
          console.log("Error: -- ", response.data.response.text);
          message.error(response.data.response.text, 7);
          return null;
        }
        const myResult = response.data.response.result;
        console.log("axiosFunction Process myResult ------------>", myResult);

        setWidgetData({
          ...widgetData,
          widgetData: myResult,
          loading: false,
          error: "",
        });
      })
      .catch((error) => {
        console.log("error", error);
        message.error(error, 7);
      });

    // axios
    //   .post("", myParams)
    //   .then((response) => {
    //     console.log("ИРСЭН ДАТА444:   ", response);
    //     const myResult = response.data.response;
    //     console.log("axiosFunction Process myResult ------------>", myResult);

    //     setWidgetData({
    //       ...widgetData,
    //       widgetData: myResult,
    //       loading: false,
    //       error: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     message.error(error, 7);
    //   });
  };

  return (
    <WidgetContext.Provider
      value={{
        widgetData,
        loadWidgetData,
      }}
    >
      {props.children}
    </WidgetContext.Provider>
  );
};

export default WidgetContext;
