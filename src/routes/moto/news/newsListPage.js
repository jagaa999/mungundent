import React, { useContext } from "react";

import FilterContext from "context/FilterContext";
import NewsListType1 from "components/Moto/NewsListType1";
import NewsListType2 from "components/Moto/NewsListType2";
import NewsListType3 from "components/Moto/NewsListType3";

const NewsListPage = () => {
  const filterContext = useContext(FilterContext);

  // filterContext.state.cardtype = "typecard, typelist";

  if (filterContext.state.cardtype.cardtype === "typecard") {
    return <NewsListType2 />;
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return <NewsListType3 />;
  } else {
    return <NewsListType1 />;
  }
};

export default NewsListPage;
