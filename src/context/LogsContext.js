import React, { useState } from "react";

import axios from "../util/axiosConfig";

const LogsContext = React.createContext();

const initialStateLogs = {
  logItems: {
    // "id": "1588304812557",
    // "tablename": "ECM_NEWS",
    // "recordid": "1588047983186922",
    // "actionname": "Үзэв",
    // "actiondate": "2020-05-12 10:20:21",
    // "idstring": "",
    // "description": "",
    // "memberid": "1502764251361501",
    // "memberphoto": "https://scontent-sin6-2.xx.fbcdn.n",
    // "membername": "Jargal Tumurbaatar",
    // "positionname": "Админ",
    // "userid": ""
  },
  total: 0,
  loading: false,
  error: null,
};

const myParamsLogs = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1588323654372494", //Log
      showQuery: "0",
      criteria: {
        recordId: "1588047983186922", //Параметрээр орж ирэх ёстой
        tableName: "ECM_NEWS", //Параметрээр орж ирэх ёстой
      },
      paging: {
        pageSize: "", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
      },
    },
  },
};

export const LogsStore = (props) => {
  const [state, setState] = useState(initialStateLogs);

  const clearLogs = () => {
    setState(initialStateLogs);
  };

  const loadLogs = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearLogs();

    myParamsLogs.request.parameters.criteria.recordId = recordId;
    myParamsLogs.request.parameters.criteria.tableName = tableName;
    //Log татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    axios
      .post("", myParamsLogs)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          logItems: Object.values(myArray),
          total: Object.values(myArray).length,
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
