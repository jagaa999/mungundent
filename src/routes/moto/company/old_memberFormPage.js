import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import MemberForm from "../../../components/Moto/MemberForm";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const MemberFormPage = (props) => {
  const { memberId = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const memberContext = useContext(MemberContext);
  const memberDetailContext = useContext(MemberContext);

  useEffect(() => {
    if (memberId !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      console.log("Хэрэглэгч байгаа эсэх.", memberId);
      memberDetailContext.loadMemberDetail(memberId);
    } else {
      console.log("ХОосон объект");
      memberDetailContext.clearMemberDetail();
    }
  }, [memberId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {memberContext.memberDetail.loading ? (
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
