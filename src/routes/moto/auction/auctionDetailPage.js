import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";

import AuctionDetail from "components/Moto/AuctionDetail";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import AuctionContext from "context/AuctionContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const AuctionDetailPage = (props) => {
  const { auctionId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const auctionContext = useContext(AuctionContext);
  const memberContext = useContext(MemberContext);

  // const auctionItem = auctionContext.state.auctionDetail;
  const auctionItem = {};

  useEffect(() => {
    if (auctionId !== 0) {
      if (memberContext.state.memberCloudUserSysId !== 0) {
        auctionContext.loadAuctionDetail(
          auctionId,
          memberContext.state.memberCloudUserSysId
        );
      } else {
        // auctionContext.loadAuctionDetailOg(auctionId);
      }
    }
  }, [auctionId, memberContext.state.memberCloudUserSysId]);

  // console.log("auctionContext", auctionContext.state);
  // console.log("ddddddddddddddddddddd");

  return (
    <>
      <Helmet>
        {/* <title>{prepareTitle(auctionItem.title)}</title>
        <meta property="fb:app_id" content="186294318100220" /> */}
        {/* <meta name="description" content={auctionItem.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={auctionItem.title} />
        <meta property="og:description" content={auctionItem.description} />
        <meta property="og:image" content={auctionItem.imagemain} />
        <meta property="og:locale" content="mn_MN" /> */}
      </Helmet>

      {memberContext.state.isLogin ? (
        <>
          {auctionContext.auctionDetail.loading ? (
            <LoadingDetail />
          ) : (
            <AuctionDetail auctionId={auctionId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default AuctionDetailPage;
