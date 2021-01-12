import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
import MemberContext from "../../../context/MemberContext";
import AuctionListType1 from "../../../components/Moto/AuctionListType1";
import AuctionListType3 from "../../../components/Moto/AuctionListType3";
import AuctionListType2 from "../../../components/Moto/AuctionListType2";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import MyHelmet from "./auctionHelmet";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import { prepareAuctionSettings } from "util/prepareSpecs";
import AuctionFilterDrawer from "../../../components/Moto/Drawer/AuctionFilterDrawer";
import AuctionContext from "../../../context/AuctionContext";

const AuctionListPage = () => {
  const filterContext = useContext(FilterContext);
  const memberContext = useContext(MemberContext);
  const auctionContext = useContext(AuctionContext);

  // if (memberContext.state.isLogin) {

  if (filterContext.state.cardtype.cardtype === "typecard") {
    return (
      <>
        <MyHelmet />
        <UniversalListType2
          myListContext={auctionContext}
          myListContextLoading={auctionContext.auctionList.loading}
          myListContextList={auctionContext.auctionList}
          myListContextListList={auctionContext.auctionList.auctionList}
          mySettings={prepareAuctionSettings}
          MyFilterDrawer={AuctionFilterDrawer}
        />
      </>
    );
  } else if (filterContext.state.cardtype.cardtype === "typetable") {
    return (
      <>
        <MyHelmet />
        <UniversalListType3
          myListContext={auctionContext}
          myListContextLoading={auctionContext.auctionList.loading}
          myListContextList={auctionContext.auctionList}
          myListContextListList={auctionContext.auctionList.auctionList}
          mySettings={prepareAuctionSettings}
          MyFilterDrawer={AuctionFilterDrawer}
        />
      </>
    );
  } else {
    return (
      <>
        <MyHelmet />
        {/* <AuctionListType1 /> */}
        <UniversalListType1
          myListContext={auctionContext}
          myListContextLoading={auctionContext.auctionList.loading}
          myListContextList={auctionContext.auctionList}
          myListContextListList={auctionContext.auctionList.auctionList}
          mySettings={prepareAuctionSettings}
          MyFilterDrawer={AuctionFilterDrawer}
        />
      </>
    );
  }

  // }

  // return <PleaseLogin />;
};

export default AuctionListPage;
