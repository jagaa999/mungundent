import React, { useState } from "react";
import axios from "util/axiosConfig";

const FilterCheckBoxContext = React.createContext();

const initialState = {
  items: {},
  loading: false,
  error: null,
};

const myParams = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1587100905303413",
      showQuery: "0",
    },
  },
};

export const FilterCheckBoxStore = (props) => {
  const [state, setState] = useState(initialState);

  const clearFilterCheckBox = () => {
    setState(initialState);
  };

  const loadFilterCheckBox = (systemmetagroupid, criteria) => {
    if (systemmetagroupid === undefined) return null;

    clearFilterCheckBox();
    myParams.request.parameters.criteria.recordId = recordId;
    myParams.request.parameters.criteria.tableName = tableName;
    myParams.request.parameters.systemmetagroupid =
      systemmetagroupid || "1587100905303413";
    myParams.request.parameters.criteria = criteria || {};

    setState({ ...state, loading: true });

    axios
      .post("", myParams)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        const myPaging = response.data.response.result.paging;
        const myTempArray = response.data.response.result;

        delete myTempArray["aggregatecolumns"];
        delete myTempArray["paging"];

        const myArray = Object.values(myTempArray);

        // console.log("ШҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮ----", myArray);

        const actionTypes = myArray
          .map((dataItem) => dataItem.actionname) // get all media types
          .filter(
            (actionType, index, array) => array.indexOf(actionType) === index
          ); // filter out duplicates

        const counts = actionTypes.map(function (item, index) {
          return { key: item, value: index };
        });

        // const myCounts = [];
        // actionTypes.map(function (item, index) {
        //   myCounts[item] = myArray.filter(
        //     (cool) => cool.actionname === item
        //   ).length;
        // });

        const myCounts = actionTypes.map((actionType) => ({
          type: actionType,
          count: myArray.filter((item) => item.actionname === actionType)
            .length,
        }));

        setState({
          ...state,
          loading: false,
          logItems: myArray,
          total: myArray.length,
          actionTypes: myCounts,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <FilterCheckBoxContext.Provider value={{ state, loadLogs }}>
      {props.children}
    </FilterCheckBoxContext.Provider>
  );
};

export default FilterCheckBoxContext;
