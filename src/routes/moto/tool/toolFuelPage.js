import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import ToolFuel from "components/Moto/Top/ToolFuel";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const ToolFuelPage = (props) => {
  const memberContext = useContext(MemberContext);

  return <>{memberContext.state.isLogin ? <ToolFuel /> : <PleaseLogin />}</>;
};

export default ToolFuelPage;
