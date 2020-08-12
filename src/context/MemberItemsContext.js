import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
import MemberContext from "context/MemberContext";
import { message } from "antd";
import Moment from "moment";
// import mainAxios from "axios";

const MemberItemsContext = React.createContext();

//----------------------- Member Items

export const MemberItemsStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialStateMemberItems = {
    memberItems: {},
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateMemberItems);

  const clearMemberItems = () => {
    setState(initialStateMemberItems);
  };

  const getError = (error) => {
    setState({ ...state, loading: false, error });
    message.error(error.toString(), 7);
    console.log("error", error);
  };

  const loadMemberItems = (memberId) => {
    if (!memberContext.state.isLogin) return null;

    clearMemberItems();

    const myParamsMemberItems = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          systemmetagroupid: "1588074509203718",
          showQuery: "0",
          paging: {
            pageSize: "", //нийтлэлийн тоо
            offset: "1", //хуудасны дугаар
            sortColumnNames: {
              modifieddate: {
                //эрэмбэлэх талбар
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
          criteria: {
            usersystemid: memberContext.state.memberCloudUserSysId,
            actionname: null, //Хамаарахгүй, бүгдийг нь
            actiondata: null, //Хамаарахгүй, бүгдийг нь
            recordid: null, //Хамаарахгүй, бүгдийг нь
          },
        },
      },
    };
    console.log("Бэлтгэсэн myParamsMemberItems : ", myParamsMemberItems);
    setState({ ...state, loading: true });

    axios
      .post("", myParamsMemberItems)
      .then((response) => {
        console.log("ИРСЭН loadMemberItems response:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        console.log("ИРСЭН loadMemberItems myArray:   ", myArray);

        setState({
          ...state,
          loading: false,
          memberItems: myArray,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  //     #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######

  const saveMemberItem = (values) => {
    console.log("saveMemberItem дотор орж ирсэн values--", values);

    const myMemberItem = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_SAVEITEMS_002",
        parameters: {
          id: values.id || "",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: values.tablename || "ECM_NEWS",
          recordid: values.recordid || "",
          actionname: values.actionname || "Таалагдлаа",
          actiondata: values.actiondata || "1",
          createtorid: memberContext.state.memberCloudUserSysId,
          createddate: Moment().format("YYYY-MM-DD HH:mm:ss"),
          modifierid: memberContext.state.memberCloudUserSysId,
          modifieddate: Moment().format("YYYY-MM-DD HH:mm:ss"),
          description: values.description || "",
        },
      },
    };

    console.log("saveMemberItem-ын бэлтгэсэн myMemberItem", myMemberItem);

    // setState({ ...state, loading: true });

    axios
      .post("", myMemberItem)
      .then((response) => {
        console.log("Just Save saveMemberItem:   ", response);

        const myData = response.data.response;
        console.log("After parse saveMemberItem Result ------------>", myData);

        if (myData.status === "error") {
          getError(myData.text);
        } else {
          message.success(
            "Амжилттай тэмдэглэж авлаа. Өдрийг сайхан өнгөрүүлээрэй."
          );
          loadMemberItems(memberContext.state.memberCloudUserSysId);
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  const deleteMemberItem = (id) => {
    console.log("deleteMemberItem дотор орж ирсэн values--", id);
    const myMemberItem = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoMemberDV_SAVEITEMS_005", //Устгах
        parameters: {
          id: id || "",
        },
      },
    };
    console.log("deleteMemberItem-ын бэлтгэсэн myMemberItem", myMemberItem);

    axios
      .post("", myMemberItem)
      .then((response) => {
        console.log("Just  deleteMemberItem:   ", response);
        const myData = response.data.response;
        console.log(
          "After parse deleteMemberItem Result ------------>",
          myData
        );

        if (myData.status === "error") {
          getError(myData.text);
        } else {
          message.warning(
            "Таны тэмдэглэлээс устгалаа. Өдрийг сайхан өнгөрүүлээрэй."
          );
          loadMemberItems(memberContext.state.memberCloudUserSysId);
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  return (
    <MemberItemsContext.Provider
      value={{ state, loadMemberItems, saveMemberItem, deleteMemberItem }}
    >
      {props.children}
    </MemberItemsContext.Provider>
  );
};

export default MemberItemsContext;
