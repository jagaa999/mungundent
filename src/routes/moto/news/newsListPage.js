import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import MemberContext from "context/MemberContext";
import NewsListType1 from "components/Moto/NewsListType1";
import NewsListType2 from "components/Moto/NewsListType2";
import NewsListType3 from "components/Moto/NewsListType3";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const NewsListPage = () => {
  // const newsListContext = useContext(NewsListContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  // filterContext.state.cardtype = "typecard, typelist";

  if (memberContext.state.isLogin) {
    if (filterContext.state.cardtype.cardtype === "typecard") {
      return <NewsListType2 />;
    } else if (filterContext.state.cardtype.cardtype === "typetable") {
      return <NewsListType3 />;
    } else {
      return <NewsListType1 />;
    }
  }

  return <PleaseLogin />;
};

export default NewsListPage;
