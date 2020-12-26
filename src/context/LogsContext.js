import React, { useState, useContext } from "react";
import axios from "../util/axiosConfig";
import { message, Form, Divider } from "antd";
import MemberContext from "context/MemberContext";

const LogsContext = React.createContext();

export const LogsStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialStateLogs = {
    logList: {},
    total: 0,
    actionTypes: {},
    loading: false,
    error: null,
  };

  const [logList, setLogList] = useState(initialStateLogs);

  const clearLogs = () => {
    setLogList(initialStateLogs);
  };

  const getError = (error) => {
    setLogList({ ...logList, loading: false, error });
    message.error(error.toString(), 7);
    console.log("error", error);
  };

  //  #       #######    #    ######
  //  #       #     #   # #   #     #
  //  #       #     #  #   #  #     #
  //  #       #     # #     # #     #
  //  #       #     # ####### #     #
  //  #       #     # #     # #     #
  //  ####### ####### #     # ######
  const loadLogsRecordId = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearLogs();

    const myParamsLogs = {
      request: {
        command: "PL_MDVIEW_004",
        username: memberContext.state.memberUID,
        password: "89",
        parameters: {
          systemmetagroupid: "1588323654372494", //Log
          ignorepermission: "1",
          showQuery: "0",
          criteria: {
            // memberId: memberContext.logList.memberCloudUserSysId,
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

    setLogList({ ...logList, loading: true });

    // console.log("myParamsLogs.request---------", myParamsLogs.request);

    axios
      .post("", myParamsLogs)
      .then((response) => {
        const myData = response.data.response;
        if (myData.status === "error") {
          getError(myData.text);
        } else {
          console.log("ИРСЭН ТҮҮХИЙ LOGS:   ", response);
          const myPaging = response.data.response.result.paging;
          const myTempArray = response.data.response.result;

          delete myTempArray["aggregatecolumns"];
          delete myTempArray["paging"];

          const myArray = Object.values(myTempArray);

          const actionTypes = myArray
            .map((dataItem) => dataItem.actionname) // get all media types
            .filter(
              (actionType, index, array) => array.indexOf(actionType) === index
            ); // filter out duplicates

          const counts = actionTypes.map(function (item, index) {
            return { key: item, value: index };
          });

          const myCounts = actionTypes.map((actionType) => ({
            type: actionType,
            count: myArray.filter((item) => item.actionname === actionType)
              .length,
          }));

          setLogList({
            ...logList,
            loading: false,
            logList: myArray,
            total: myArray.length,
            actionTypes: myCounts,
          });
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  //   #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######

  const insertLog = (values) => {
    console.log("insertLoginsertLog ---", values);

    const myParamsLogInsert = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_LOG_002", //Log засах процесс
        parameters: {
          id: values.id || undefined,
          tableName: values.tableName || "Тодорхойгүй",
          recordId: values.recordId || "",
          actionName: values.actionName || "Тодорхойгүй",
          // actionDate: "",
          actionType: values.actionType || "",
          description: values.description || "",
          userSystemId:
            values.memberCloudUserSysId ||
            memberContext.state.memberCloudUserSysId,
          idstring: values.idstring || "",
        },
      },
    };

    console.log("insertLog ------", myParamsLogInsert);

    axios
      .post("", myParamsLogInsert)
      .then((response) => {
        console.log("LOG НЭМЭХ", response);
        const myData = response.data.response;
        console.log("LOG НЭМЭХ myData", myData);
        if (myData.status === "error") {
          getError(myData.text);
        } else {
          // message.success("Амжилттай илгээлээ. Баярлалаа.");
        }
      })
      .catch((error) => {
        // getError(error);
        // message.error(error.toString(), 7);
        console.log("error LOG ", error);
      });
  };

  return (
    <LogsContext.Provider value={{ logList, loadLogsRecordId, insertLog }}>
      {props.children}
    </LogsContext.Provider>
  );
};

export default LogsContext;
