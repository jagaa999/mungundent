import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import AutozarForm from "components/Moto/AutozarForm";
import AutozarContext from "context/AutozarContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const AutozarFormPage = (props) => {
  const { id = 0 } = useParams(); //URL-аас орж ирсэн ID
  const autozarDetailContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (id !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      autozarDetailContext.loadAutozarDetail(id);
    } else {
      autozarDetailContext.clearAutozarDetail();
    }
  }, [id, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {autozarDetailContext.autozarDetail.loading ? (
            <LoadingDetail />
          ) : (
            <AutozarForm id={id} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default AutozarFormPage;
