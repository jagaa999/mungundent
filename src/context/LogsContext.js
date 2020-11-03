import React, { useState, useContext } from "react";
import axios from "../util/axiosConfig";
import { message, Form, Divider } from "antd";
import MemberContext from "context/MemberContext";

const LogsContext = React.createContext();

export const LogsStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialStateLogs = {
    logItems: {},
    total: 0,
    actionTypes: {},
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateLogs);

  const clearLogs = () => {
    setState(initialStateLogs);
  };

  const getError = (error) => {
    setState({ ...state, loading: false, error });
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
  const loadLogs = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearLogs();

    const myParamsLogs = {
      request: {
        // sessionid: memberContext.state.memberCloudSessionId,
        // sessionid: "03f7abf9-0371-4709-807e-7241143589d4", //! jargal@kt.mn session-ийг түрдээ хүчээр өгөв. Даваа гаригт Батаагаар Java-ийн login функцийг үзүүлж, user_id үүсэхгүй байгааг үүсгүүлдэг болгуулна.
        // userid: memberContext.state.memberCloudUserId,
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "PL_MDVIEW_004",
        username: memberContext.state.memberUID,
        password: "89",
        parameters: {
          systemmetagroupid: "1588323654372494", //Log
          ignorepermission: "1",
          showQuery: "0",
          criteria: {
            // memberId: memberContext.state.memberCloudUserSysId,
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

          setState({
            ...state,
            loading: false,
            logItems: myArray,
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
    // console.log("insertLoginsertLog ---", values);

    const myParamsSendError = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_LOG_002", //Log руу нэмэх
        parameters: {
          // id: "",
          tableName: values.tableName || "Тодорхойгүй",
          recordId: values.id || "",
          actionName: values.actionName || "Тодорхойгүй",
          // actionDate: "",
          actionType: values.actionType || "",
          description: values.description || "",
          // memberId: "",
          // userId: "",
          // idString: "",
          userSystemId: memberContext.state.memberCloudUserSysId,
        },
      },
    };

    // console.log("insertLog ------", myParamsSendError);

    axios
      .post("", myParamsSendError)
      .then((response) => {
        // console.log("LOG НЭМЭХ", response);
        const myData = response.data.response;
        // console.log("LOG НЭМЭХ myData", myData);
        if (myData.status === "error") {
          getError(myData.text);
        } else {
          message.success("Алдааг амжилттай илгээлээ. Баярлалаа.");
        }
      })
      .catch((error) => {
        // getError(error);
        message.error(error.toString(), 7);
        console.log("error LOG ", error);
      });
  };

  return (
    <LogsContext.Provider value={{ state, loadLogs, insertLog }}>
      {props.children}
    </LogsContext.Provider>
  );
};

export default LogsContext;
