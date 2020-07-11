import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const MemberContext = React.createContext();

//-----------------------
const initialStateMemberProfile = {
  memberProfile: {},
  loading: false,
  error: null,
};

const myParamsMemberProfile = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1587601946540",
      showQuery: "0",
      criteria: {
        newsid: {
          "0": {
            operator: "=",
            operand: "1588047983186922",
          },
        },
      },
      paging: {
        pageSize: "1", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
      },
    },
  },
};

export const MemberProfileStore = (props) => {
  const [state, setState] = useState(initialStateMemberProfile);

  const clearMemberProfile = () => {
    setState(initialStateMemberProfile);
  };

  const loadMemberProfile = (newsid) => {
    clearMemberProfile();

    myParamsMemberProfile.request.parameters.criteria.newsid = newsid;
    //console.log("ЭНД ОРЖ ИРСЭН");
    //News татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    //console.log("axios====>", axios);

    axios
      .post("", myParamsMemberProfile)
      .then((response) => {
        //Датанууд ороод ирсэн
        //Одоо state-дээ олгоно.
        //console.log("ИРСЭН ДАТА444:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          memberProfile: Object.values(myArray)[0],
        });
        // setState({ ...state, memberProfile: response.data });
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
