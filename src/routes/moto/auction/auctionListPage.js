import React, { useContext } from "react";

// import NewsListContext from "context/NewsListContext";
import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
// import AuctionListType1 from "../../../components/Moto/AuctionListType1";
// import AuctionListType2 from "../../../components/Moto/AuctionListType2";
import AuctionListType3 from "../../../components/Moto/AuctionListType3";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const AuctionListPage = () => {
  // const newsListContext = useContext(CarCatalogContext);
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  // if (memberContext.state.isLogin) {
  // return <AuctionListType1 />;
  // return <AuctionListType2 />;
  return <AuctionListType3 />;
  // }

  return <PleaseLogin />;
};

export default AuctionListPage;
