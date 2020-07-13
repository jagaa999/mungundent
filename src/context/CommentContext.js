import React, { useState } from "react";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const CommentContext = React.createContext();

const initialStateCommentList = {
  commentItems: {},
  total: 0,
  loading: false,
  error: null,
};

const myParamsCommentList = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1588656605153868", //Comment
      showQuery: "0",
      criteria: {
        recordId: "1588047983186922", //Параметрээр орж ирэх ёстой
        tableName: "", //Параметрээр орж ирэх ёстой
      },
      paging: {
        pageSize: "", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
      },
    },
  },
};

export const CommentListStore = (props) => {
  const [state, setState] = useState(initialStateCommentList);

  const clearCommentList = () => {
    setState(initialStateCommentList);
  };

  const loadCommentList = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearCommentList();
    // console.log("IIIIIIIIIIIDDDDDDDDDDDD=====", recordId);

    myParamsCommentList.request.parameters.criteria.recordId = recordId;
    myParamsCommentList.request.parameters.criteria.tableName = tableName;
    //Comment татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    // console.log("MYParameter=====", myParamsCommentList);

    axios
      .post("", myParamsCommentList)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          commentItems: Object.values(myArray),
          total: Object.values(myArray).length,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <CommentContext.Provider value={{ state, loadCommentList }}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
