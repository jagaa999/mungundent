import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import ToolConverter from "components/Moto/ToolConverter";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const ToolConverterPage = (props) => {
  const memberContext = useContext(MemberContext);

  return (
    <>{memberContext.state.isLogin ? <ToolConverter /> : <PleaseLogin />}</>
  );
};

export default ToolConverterPage;
