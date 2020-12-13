import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import AutozarListType1 from "../../../components/Moto/AutozarListType1";
import AutozarListType2 from "../../../components/Moto/AutozarListType2";
import AutozarListType3 from "../../../components/Moto/AutozarListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const AutozarListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (filterContext.state.cardtype.cardtype === "typecard") {
    // return <AutozarListType2 />;
    return <AutozarListType2 />;
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return <AutozarListType3 />;
  } else {
    // return <AutozarListType1 />;
    return <AutozarListType1 />;
  }

  // if (memberContext.state.isLogin) {
  //   return <AutozarListType1 />;
  // }

  return <PleaseLogin />;
};

export default AutozarListPage;
