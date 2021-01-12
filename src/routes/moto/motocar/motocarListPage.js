import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import MotocarListType1 from "../../../components/Moto/MotocarListType1";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const MotocarListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <MotocarListType1 />;
  }

  return <PleaseLogin />;
};

export default MotocarListPage;
