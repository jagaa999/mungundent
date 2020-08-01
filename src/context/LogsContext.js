import React, { useState, useContext } from "react";
import axios from "../util/axiosConfig";
import MemberContext from "context/MemberContext";

const LogsContext = React.createContext();

const initialStateLogs = {
  logItems: {},
  total: 0,
  actionTypes: {},
  loading: false,
  error: null,
};

export const LogsStore = (props) => {
  const [state, setState] = useState(initialStateLogs);
  const memberContext = useContext(MemberContext);

  const clearLogs = () => {
    setState(initialStateLogs);
  };

  const loadLogs = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearLogs();

    const myParamsLogs = {
      request: {
        sessionid: memberContext.state.memberCloudSessionId,
        command: "PL_MDVIEW_004",
        parameters: {
          systemmetagroupid: "1588323654372494", //Log
          showQuery: "0",
          criteria: {
            recordId: recordId || "", //Параметрээр орж ирэх ёстой
            tableName: tableName || "ECM_NEWS", //Параметрээр орж ирэх ёстой
          },
          paging: {
            pageSize: "", //нийтлэлийн тоо
            offset: "1", //хуудасны дугаар
            sortColumnNames: {
              actionDate: {
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
        },
      },
    };

    setState({ ...state, loading: true });

    // console.log("MYSTATE---------", state);
    // console.log("myParamsLogs.request---------", myParamsLogs.request);

    axios
      .post("", myParamsLogs)
      .then((response) => {
        console.log("ИРСЭН ДАТА444:   ", response);
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

        // console.log("ШҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮ----", myCounts);

        //   {
        //   type: actionType,
        //   count: myArray.filter((item) => item.actionname === actionType)
        //     .length,
        // }
        // ();
        // console.log("ШҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮҮ----", counts);

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
    <LogsContext.Provider value={{ state, loadLogs }}>
      {props.children}
    </LogsContext.Provider>
  );
};

export default LogsContext;
