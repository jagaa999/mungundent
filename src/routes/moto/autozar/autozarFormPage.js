import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import AutozarForm from "components/Moto/AutozarForm";
import AutozarContext from "context/AutozarContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const AutozarFormPage = (props) => {
  const { autozarId = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const autozarDetailContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);
  console.log("ЭНД БАЙНА УУ", autozarId);

  useEffect(() => {
    if (autozarId !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      console.log("Машин байгаа юм байна.", autozarId);
      autozarDetailContext.loadAutozarDetail(autozarId);
    } else {
      console.log("ХОосон объект");
      autozarDetailContext.clearAutozarDetail();
    }
  }, [autozarId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {autozarDetailContext.autozarDetail.loading ? (
            <LoadingDetail />
          ) : (
            <AutozarForm autozarId={autozarId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default AutozarFormPage;
