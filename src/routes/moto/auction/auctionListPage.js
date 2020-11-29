import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import AuctionListType1 from "../../../components/Moto/AuctionListType1";
import AuctionListType3 from "../../../components/Moto/AuctionListType3";
import AuctionListType2 from "../../../components/Moto/AuctionListType2";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const AuctionListPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  // if (memberContext.state.isLogin) {

  if (filterContext.state.cardtype.cardtype === "typecard") {
    return <AuctionListType2 />;
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return <AuctionListType3 />;
  } else {
    return <AuctionListType1 />;
  }

  // }

  // return <PleaseLogin />;
};

export default AuctionListPage;
