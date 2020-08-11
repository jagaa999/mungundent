import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
import MemberContext from "context/MemberContext";
import { message } from "antd";
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
    clearMemberItems();

    memberId = "1502764251361501"; //! Jargal Tumurbaatar гэдэг хэрэглэгчийн ID-г хүчээр тавьчихлаа.

    const myParamsMemberItems = {
      request: {
        sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "PL_MDVIEW_004",
        parameters: {
          systemmetagroupid: "1588074509203718",
          showQuery: "0",
          criteria: {
            memberId: "1502764251361501", //! Jargal Tumurbaatar гэдэг хэрэглэгчийн ID-г хүчээр тавьчихлаа.
            actionName: "",
            actionData: "",
          },
        },
      },
    };

    //MemberItems татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    axios
      .post("", myParamsMemberItems)
      .then((response) => {
        //Датанууд ороод ирсэн
        //Одоо state-дээ олгоно.
        // console.log("ИРСЭН ДАТА444:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        // console.log("ИРСЭН MYARRAY:   ", myArray);

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
          memberId: memberContext.state.memberCloudUserSysId,
          userSystemId: memberContext.state.memberCloudUserSysId,
          tableName: values.tablename || "ECM_NEWS",
          recordId: values.recordid || "",
          actionName: values.actionname || "Таалагдлаа",
          actionData: values.actiondata || "1",
          createtorId: memberContext.state.memberCloudUserSysId,
          createdDate: null,
          modifierId: memberContext.state.memberCloudUserSysId,
          modifiedDate: null,
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
          // history.push({
          //   pathname: "/news",
          // });
          // loadNewsDetail(values.newsId);
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  return (
    <MemberItemsContext.Provider
      value={{ state, loadMemberItems, saveMemberItem }}
    >
      {props.children}
    </MemberItemsContext.Provider>
  );
};

export default MemberItemsContext;
