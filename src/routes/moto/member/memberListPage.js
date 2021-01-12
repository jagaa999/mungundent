import React, { useContext } from "react";

import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import MemberListType1 from "components/Moto/MemberListType1";
import MemberListType2 from "components/Moto/MemberListType2";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const MemberListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    // return <MemberListType1 />;
    return <MemberListType2 />;
  }

  return <PleaseLogin />;
};

export default MemberListPage;
