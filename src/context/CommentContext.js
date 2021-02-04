import React, { useState, useContext } from "react";

import axios from "../util/axiosConfig";
import { message, Form, Divider } from "antd";
import MemberContext from "context/MemberContext";

const CommentContext = React.createContext();

export const CommentListStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialCommentList = {
    commentList: {},
    total: 0,
    loading: false,
    error: null,
  };

  const [commentList, setState] = useState(initialCommentList);

  const clearCommentList = () => {
    setState(initialCommentList);
  };

  const getError = (error) => {
    setState({ ...commentList, loading: false, error });
    message.error(error.toString(), 7);
    console.log("error", error);
  };

  const loadCommentList = (recordId, tableName) => {
    if (recordId === undefined) return null;

    clearCommentList();

    const myParamsCommentList = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "PL_MDVIEW_004",
        username:
          memberContext.state.memberUID || "d14BuUMTjSRnLbrFXDOXM80fNfa2",
        password: "89",
        parameters: {
          systemmetagroupid: "1588656605153868", //Comment
          ignorepermission: "1",
          showQuery: "0",
          criteria: {
            recordId: recordId, //Параметрээр орж ирэх ёстой
            tableName: tableName, //Параметрээр орж ирэх ёстой
          },
          paging: {
            pageSize: "", //нийтлэлийн тоо
            offset: "1", //хуудасны дугаар
            sortColumnNames: {
              createddate: {
                //эрэмбэлэх талбар
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        },
      },
    };

    setState({ ...commentList, loading: true });

    axios
      .post("", myParamsCommentList)
      .then((response) => {
        const myData = response.data.response;
        if (myData.status === "error") {
          getError(myData.text);
        } else {
          // console.log("ИРСЭН ДАТА444:   ", response);
          const myPaging = response.data.response.result.paging;
          const myArray = response.data.response.result;

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setState({
            ...commentList,
            loading: false,
            commentList: Object.values(myArray),
            total: Object.values(myArray).length,
          });
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  const insertComment = (recordId, commentBody, tableName, parentId) => {
    if (!memberContext.isMember()) {
      return null;
    }

    // console.log("DDDDDDDDDD", recordId, commentBody, tableName, parentId);

    if (recordId === undefined || commentBody === "") return null;

    const myParamsInsertComment = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_COMMENT_001",
        parameters: {
          userSystemId: memberContext.state.memberCloudUserSysId,
          actionType: "1",
          recordId: recordId * 1 || "",
          description: commentBody,
          tableName: tableName || "ECM_NEWS",
          parentId: parentId,
        },
      },
    };
    console.log("Insert Comment ------", myParamsInsertComment);

    axios
      .post("", myParamsInsertComment)
      .then((response) => {
        // console.log("COMMENT НЭМЭХ", response);

        const myData = response.data.response;
        // console.log("COMMENT НЭМЭХ", myData);

        if (myData.status === "error") {
          getError(myData.text);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");

          loadCommentList(recordId, tableName);
        }
      })
      .catch((error) => {
        // getError(error);
        message.error(error.toString(), 7);
        console.log("error COMMENT ", error);
      });
  };

  return (
    <CommentContext.Provider
      value={{ commentList, loadCommentList, insertComment }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
