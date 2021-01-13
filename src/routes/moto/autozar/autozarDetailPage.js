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
  const { id } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const autozarContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);

  const autozarItem = autozarContext.autozarDetail.autozarDetail || {};

  useEffect(() => {
    if (id !== 0) {
      // if (memberContext.state.memberCloudUserSysId !== 0) {
      autozarContext.loadAutozarDetail(
        id,
        memberContext.state.memberCloudUserSysId
      );
      // } else {
      //   // autozarContext.loadAutozarDetailOg(id);
      // }
    }
  }, [id, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {/* {memberContext.state.isLogin ? ( */}
      <>
        {/* <LogsStore> */}
        {autozarContext.autozarDetail.loading ? (
          <LoadingDetail />
        ) : (
          <AutozarDetail2 id={id} />
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
