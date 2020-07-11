import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const MemberContext = React.createContext();

//-----------------------
const initialStateMemberDetail = {
  memberDetail: {},
  loading: false,
  error: null,
};

const myParamsMemberDetail = {
  request: {
    command: "login",
    parameters: {
      username: "admin",
      password: "89",
    },
  },
};

export const MemberDetailStore = (props) => {
  const [state, setState] = useState(initialStateMemberDetail);

  const clearMemberDetail = () => {
    setState(initialStateMemberDetail);
  };

  const loadMemberDetail = (memberId) => {
    clearMemberDetail();

    // myParamsMemberDetail.request.parameters.criteria.memberId = memberId;
    //console.log("ЭНД ОРЖ ИРСЭН");
    //Member татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    //console.log("axios====>", axios);

    axios
      .post("", myParamsMemberDetail)
      .then((response) => {
        //Датанууд ороод ирсэн
        //Одоо state-дээ олгоно.
        // console.log("ИРСЭН ДАТА444:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        // Хэрвээ customerid хоосон байвал хүчээр тавьчихъя. 200108101001108990
        if (myArray.userkeys[0].customerid === "") {
          myArray.userkeys[0].customerid = "200108101001108990";
        }

        // delete myArray["aggregatecolumns"];
        // delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          memberDetail: myArray,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <MemberContext.Provider value={{ state, loadMemberDetail }}>
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
