import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { prepareTitle } from "util/config";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

import MemberDetail from "components/Moto/MemberDetail";

import MemberContext from "context/MemberContext";

const MemberDetailPage = (props) => {
  //URL-аас орж ирсэн ID
  const { memberId = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const memberDetailContext = useContext(MemberContext);
  const memberContext = useContext(MemberContext);
  const myMemberDetail = memberDetailContext.memberDetail.memberDetail;

  useEffect(() => {
    if (memberId !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      // console.log("Member байгаа юм байна.", memberId);
      // memberDetailContext.loadMemberDetail(memberId);
    } else {
      // console.log("Хоосон объект");
      memberDetailContext.clearMemberDetail();
    }
  }, [memberId, memberContext.state.memberCloudUserSysId]);

  // console.log("myMemberDetailmyMemberDetail");
  // console.table(myMemberDetail);

  return (
    <>
      <Helmet>
        <title>{prepareTitle(myMemberDetail.name)}</title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta name="description" content={myMemberDetail.bio} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={myMemberDetail.name} />
        <meta property="og:description" content={myMemberDetail.bio} />
        <meta property="og:image" content={myMemberDetail.imagemain} />
        <meta property="og:locale" content="mn_MN" />
      </Helmet>

      {memberContext.state.isLogin ? (
        <>
          {memberDetailContext.memberDetail.loading ? (
            <LoadingDetail />
          ) : (
            <MemberDetail memberId={memberId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default MemberDetailPage;
