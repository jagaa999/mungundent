import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import AutozarForm from "components/Moto/AutozarForm";
import AutozarContext from "context/AutozarContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const AutozarFormPage = (props) => {
  const { id = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const autozarDetailContext = useContext(AutozarContext);
  const memberContext = useContext(MemberContext);
  console.log("ЭНД БАЙНА УУ", id);

  useEffect(() => {
    if (id !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      console.log("Машин байгаа юм байна.", id);
      autozarDetailContext.loadAutozarDetail(id);
    } else {
      console.log("ХОосон объект");
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
