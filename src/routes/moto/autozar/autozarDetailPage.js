import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { prepareTitle } from "../../../util/config";
// import AutozarDetail from "../../../components/Moto/AutozarDetail";
import AutozarDetail2 from "../../../components/Moto/AutozarDetail2";
import { LogsStore } from "../../../context/LogsContext";
import AutozarContext from "../../../context/AutozarContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const AutozarDetailPage = (props) => {
  const { autozarId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const autozarContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);

  const autozarItem = autozarContext.autozarDetail.autozarDetail || {};

  useEffect(() => {
    if (autozarId !== 0) {
      // if (memberContext.state.memberCloudUserSysId !== 0) {
      autozarContext.loadAutozarDetail(
        autozarId,
        memberContext.state.memberCloudUserSysId
      );
      // } else {
      //   // autozarContext.loadAutozarDetailOg(autozarId);
      // }
    }
  }, [autozarId, memberContext.state.memberCloudUserSysId]);

  // console.log("autozarContext", autozarContext.state);
  // console.log("autozarItem dfg dfg dfg", autozarItem);

  return (
    <>
      <Helmet>
        {/* <title>
          {prepareTitle(
            autozarItem.YEAR +
              " " +
              autozarItem.MARKA_NAME +
              " " +
              autozarItem.MODEL_NAME
          )}
        </title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta
          name="description"
          content={autozarItem.MODE_NAME + " " + autozarItem.GRADE}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content={
            autozarItem.YEAR +
            " " +
            autozarItem.MARKA_NAME +
            " " +
            autozarItem.MODEL_NAME
          }
        />
        <meta
          property="og:description"
          content={autozarItem.MODE_NAME + " " + autozarItem.GRADE}
        />
        <meta property="og:image" content={autozarItem.IMAGES} />
        <meta property="og:locale" content="mn_MN" /> */}
      </Helmet>

      {/* {memberContext.state.isLogin ? ( */}
      <>
        {/* <LogsStore> */}
        {autozarContext.autozarDetail.loading ? (
          <LoadingDetail />
        ) : (
          <AutozarDetail2 autozarId={autozarId} />
        )}
        {/* </LogsStore> */}
      </>
      {/* ) : (
        <PleaseLogin />
      )} */}
    </>
  );
};

export default AutozarDetailPage;
