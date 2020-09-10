import React, { useState, useContext, useEffect } from "react";
import { parse } from "query-string";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import useDidMountEffect from "util/useDidMountEffect";

const CarCatalogListContext = React.createContext();

export const CarCatalogListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  const initialStateCarFirmList = {
    loadParams: {
      systemmetagroupid: "1479905024968",
      showquery: "0",
      paging: {
        offset: "1",
        pagesize: "500",
      },
      ignorepermission: "1",
      criteria: {
        scoretypeid: {
          0: {
            operator: "=",
            operand: "4",
          },
        },
      },
    },
    carFirmList: [],
    loading: false,
    error: null,
  };

  const [carFirmList, setCarFirmList] = useState(initialStateCarFirmList);

  // useDidMountEffect(() => {
  //   loadCarCatalogList();
  // }, [
  //   filterContext.state.filterList,
  //   filterContext.state.paging,
  //   filterContext.state.sorting,
  //   filterContext.state.cardtype,
  // ]);

  const loadCarFirmList = () => {
    setCarFirmList({ ...carFirmList, loading: true });

    const myParamsCarFirmList = {
      request: {
        username: "motoadmin",
        password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: carFirmList.loadParams,
      },
    };

    axiosCloud
      .post("", myParamsCarFirmList)
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

          setCarFirmList({
            ...carFirmList,
            loading: false,
            carFirmList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setCarFirmList({ ...carFirmList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  return (
    <CarCatalogListContext.Provider value={{ carFirmList, loadCarFirmList }}>
      {props.children}
    </CarCatalogListContext.Provider>
  );
};

export default CarCatalogListContext;