import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import CompareItems from "../../../components/Moto/CompareItems";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

const ComparePage = (props) => {
  const memberContext = useContext(MemberContext);

  return (
    <>{memberContext.state.isLogin ? <CompareItems /> : <PleaseLogin />}</>
  );
};

export default ComparePage;
