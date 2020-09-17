import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const MemberListContext = React.createContext();

export const MemberListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialStateMemberList = {
    loadParams: {
      systemmetagroupid: "1598934954642",
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
    memberList: [],
    loading: false,
    error: null,
  };

  const [memberList, setMemberList] = useState(initialStateMemberList);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadMemberList = () => {
    setMemberList({ ...memberList, loading: true });

    const myParamsMemberList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: memberList.loadParams,
      },
    };

    axios
      .post("", myParamsMemberList)
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

          setMemberList({
            ...memberList,
            loading: false,
            memberList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setMemberList({ ...memberList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  return (
    <MemberListContext.Provider
      value={{
        memberList,
        loadMemberList,
      }}
    >
      {props.children}
    </MemberListContext.Provider>
  );
};

export default MemberListContext;
