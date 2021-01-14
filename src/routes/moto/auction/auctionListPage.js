import React, { useContext } from "react";

import FilterContext from "../../../context/FilterContext";
// import MemberContext from "../../../context/MemberContext";
// import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";
import UniversalListType1 from "../../../components/Moto/UniversalListType1";
import UniversalListType2 from "../../../components/Moto/UniversalListType2";
import UniversalListType3 from "../../../components/Moto/UniversalListType3";
import { prepareAuctionListSettings } from "util/prepareSpecsAuction";
import AuctionFilterDrawer from "../../../components/Moto/Drawer/AuctionFilterDrawer";
import AuctionContext from "../../../context/AuctionContext";
import UniversalMeta from "util/prepareMeta";

const AuctionListPage = () => {
  const filterContext = useContext(FilterContext);
  // const memberContext = useContext(MemberContext);
  const auctionContext = useContext(AuctionContext);

  const renderSwitch = (cardtype) => {
    switch (cardtype) {
      case "typecard":
        return (
          <UniversalListType2
            myListContext={auctionContext}
            myListContextLoading={auctionContext.auctionList.loading}
            myListContextList={auctionContext.auctionList}
            myListContextListList={auctionContext.auctionList.auctionList}
            mySettings={prepareAuctionListSettings}
            MyFilterDrawer={AuctionFilterDrawer}
          />
        );
      case "typetable":
        return (
          <UniversalListType3
            myListContext={auctionContext}
            myListContextLoading={auctionContext.auctionList.loading}
            myListContextList={auctionContext.auctionList}
            myListContextListList={auctionContext.auctionList.auctionList}
            mySettings={prepareAuctionListSettings}
            MyFilterDrawer={AuctionFilterDrawer}
          />
        );
      default:
        return (
          <UniversalListType1
            myListContext={auctionContext}
            myListContextLoading={auctionContext.auctionList.loading}
            myListContextList={auctionContext.auctionList}
            myListContextListList={auctionContext.auctionList.auctionList}
            mySettings={prepareAuctionListSettings}
            MyFilterDrawer={AuctionFilterDrawer}
          />
        );
    }
  };

  return (
    <>
      <UniversalMeta meta={prepareAuctionListSettings.meta} />
      {renderSwitch(filterContext.state.cardtype.cardtype)}
    </>
  );
};

export default AuctionListPage;

//Хэрвээ хэрэглэгч login-дсон эсэхийг шалгахдаа
// if (memberContext.state.isLogin) {
// return <PleaseLogin />;
