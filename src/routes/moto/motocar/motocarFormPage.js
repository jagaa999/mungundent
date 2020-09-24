import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import MotocarForm from "components/Moto/MotocarForm";
import MotocarContext from "context/MotocarContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const MotocarFormPage = (props) => {
  const { motocarId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const motocarDetailContext = useContext(MotocarContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (motocarId !== 0 && memberContext.state.memberCloudUserSysId !== 0)
      motocarDetailContext.loadMotocarDetail(
        motocarId,
        memberContext.state.memberCloudUserSysId
      );
  }, [motocarId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {motocarDetailContext.motocarDetail.loading ? (
            <LoadingDetail />
          ) : (
            <MotocarForm motocarId={motocarId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default MotocarFormPage;
