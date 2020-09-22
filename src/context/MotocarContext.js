import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const MotocarContext = React.createContext();

export const MotocarStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialStateMotocarList = {
    loadParams: {
      // systemmetagroupid: "1585197442423220",
      systemmetagroupid: "1600421356169317",
      showquery: "0",
      ignorepermission: "1",
      criteria: {},
      paging: {
        pageSize: "24",
        offset: "1",
        sortcolumnnames: {
          createddate: {
            sorttype: "DESC", //эрэмбэлэх чиглэл
          },
        },
      },
    },
    motocarList: [],
    loading: false,
    error: null,
  };

  const [motocarList, setMotocarList] = useState(initialStateMotocarList);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadMotocarList = () => {
    setMotocarList({ ...motocarList, loading: true });

    const myParamsMotocarList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: motocarList.loadParams,
      },
    };

    // axiosCloud
    axios
      .post("", myParamsMotocarList)
      .then((response) => {
        console.log("response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setMotocarList({
            ...motocarList,
            loading: false,
            motocarList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setMotocarList({ ...motocarList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  return (
    <MotocarContext.Provider
      value={{
        motocarList,
        loadMotocarList,
      }}
    >
      {props.children}
    </MotocarContext.Provider>
  );
};

export default MotocarContext;
