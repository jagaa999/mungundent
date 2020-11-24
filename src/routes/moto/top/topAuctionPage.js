import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import TopAuction from "components/Moto/TopAuction";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const TopAuctionPage = (props) => {
  const memberContext = useContext(MemberContext);

  return <TopAuction />;
  // return "dfgdf gdfg dfg dfg dfg dfg";
};

export default TopAuctionPage;
