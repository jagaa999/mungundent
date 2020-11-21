import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { prepareTitle } from "../../../util/config";
// import AuctionDetail from "../../../components/Moto/AuctionDetail";
import AuctionDetail2 from "../../../components/Moto/AuctionDetail2";
import { LogsStore } from "../../../context/LogsContext";
import AuctionContext from "../../../context/AuctionContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const AuctionDetailPage = (props) => {
  const { auctionId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const auctionContext = useContext(AuctionContext);
  const memberContext = useContext(MemberContext);

  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};

  useEffect(() => {
    if (auctionId !== 0) {
      // if (memberContext.state.memberCloudUserSysId !== 0) {
      auctionContext.loadAuctionDetail(
        auctionId,
        memberContext.state.memberCloudUserSysId
      );
      // } else {
      //   // auctionContext.loadAuctionDetailOg(auctionId);
      // }
    }
  }, [auctionId, memberContext.state.memberCloudUserSysId]);

  // console.log("auctionContext", auctionContext.state);
  // console.log("auctionItem dfg dfg dfg", auctionItem);

  return (
    <>
      <Helmet>
        <title>
          {prepareTitle(
            auctionItem.YEAR +
              " " +
              auctionItem.MARKA_NAME +
              " " +
              auctionItem.MODEL_NAME
          )}
        </title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta
          name="description"
          content={auctionItem.MODE_NAME + " " + auctionItem.GRADE}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content={
            auctionItem.YEAR +
            " " +
            auctionItem.MARKA_NAME +
            " " +
            auctionItem.MODEL_NAME
          }
        />
        <meta
          property="og:description"
          content={auctionItem.MODE_NAME + " " + auctionItem.GRADE}
        />
        <meta property="og:image" content={auctionItem.IMAGES} />
        <meta property="og:locale" content="mn_MN" />
      </Helmet>

      {/* {memberContext.state.isLogin ? ( */}
      <>
        {/* <LogsStore> */}
        {auctionContext.auctionDetail.loading ? (
          <LoadingDetail />
        ) : (
          <AuctionDetail2 auctionId={auctionId} />
        )}
        {/* </LogsStore> */}
      </>
      {/* ) : (
        <PleaseLogin />
      )} */}
    </>
  );
};

export default AuctionDetailPage;
