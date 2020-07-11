import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const MemberContext = React.createContext();

//----------------------- Member Profile
const initialStateMemberProfile = {
  memberProfile: {},
  loading: false,
  error: null,
};

const myParamsMemberProfile = {
  request: {
    command: "login",
    parameters: {
      username: "admin",
      password: "89",
    },
  },
};

export const MemberProfileStore = (props) => {
  const [state, setState] = useState(initialStateMemberProfile);

  const clearMemberProfile = () => {
    setState(initialStateMemberProfile);
  };

  const loadMemberProfile = (memberId) => {
    clearMemberProfile();

    // myParamsMemberProfile.request.parameters.criteria.memberId = memberId;
    //console.log("ЭНД ОРЖ ИРСЭН");
    //Member татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    //console.log("axios====>", axios);

    axios
      .post("", myParamsMemberProfile)
      .then((response) => {
        //Датанууд ороод ирсэн
        //Одоо state-дээ олгоно.
        // console.log("ИРСЭН ДАТА444:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        // Хэрвээ customerid хоосон байвал хүчээр тавьчихъя. 200108101001108990
        if (myArray.userkeys[0].customerid === "") {
          myArray.customerid = "200108101001108990";
          myArray.userkeys[0].customerid = "200108101001108990";
        }
        console.log("myArray", myArray);

        // delete myArray["aggregatecolumns"];
        // delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          memberProfile: myArray,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <MemberContext.Provider value={{ state, loadMemberProfile }}>
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
