import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import MemberListType1 from "components/Moto/MemberListType1";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const MemberListPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  if (memberContext.state.isLogin) {
    return <MemberListType1 />;
  }

  return <PleaseLogin />;
};

export default MemberListPage;
