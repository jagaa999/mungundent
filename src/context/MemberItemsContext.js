import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const MemberItemsContext = React.createContext();

//----------------------- Member Items
const initialStateMemberItems = {
  memberItems: {},
  loading: false,
  error: null,
};

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

export const MemberItemsStore = (props) => {
  const [state, setState] = useState(initialStateMemberItems);

  const clearMemberItems = () => {
    setState(initialStateMemberItems);
  };

  const loadMemberItems = (memberId) => {
    clearMemberItems();

    memberId = "1502764251361501"; //! Jargal Tumurbaatar гэдэг хэрэглэгчийн ID-г хүчээр тавьчихлаа.

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

        console.log("ИРСЭН MYARRAY:   ", myArray);

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

  return (
    <MemberItemsContext.Provider value={{ state, loadMemberItems }}>
      {props.children}
    </MemberItemsContext.Provider>
  );
};

export default MemberItemsContext;
