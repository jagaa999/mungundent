import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import MemberForm from "components/Moto/MemberForm";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const MemberFormPage = (props) => {
  const { memberId = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (memberId !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      console.log("Хэрэглэгч байгаа эсэх.", memberId);
      // motocarDetailContext.loadMotocarDetail(memberId);
    } else {
      console.log("ХОосон объект");
      // motocarDetailContext.clearMotocarDetail();
    }
  }, [memberId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {motocarDetailContext.motocarDetail.loading ? (
            <LoadingDetail />
          ) : (
            <MemberForm memberId={memberId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default MemberFormPage;
