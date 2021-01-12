import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import AuctionListType1 from "../../../components/Moto/AuctionListType1";
import AuctionListType3 from "../../../components/Moto/AuctionListType3";
import AuctionListType2 from "../../../components/Moto/AuctionListType2";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import MyHelmet from "./auctionHelmet";

const AuctionListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);

  // if (memberContext.state.isLogin) {

  if (filterContext.state.cardtype.cardtype === "typecard") {
    return (
      <>
        <MyHelmet />
        <AuctionListType2 />
      </>
    );
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return (
      <>
        <MyHelmet />
        <AuctionListType3 />
      </>
    );
  } else {
    return (
      <>
        <MyHelmet />
        <AuctionListType1 />
      </>
    );
  }

  // }

  // return <PleaseLogin />;
};

export default AuctionListPage;
