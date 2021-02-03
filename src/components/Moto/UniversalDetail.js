import React from "react";

import { isEmpty } from "lodash";
import UniversalDetailPageHeader from "./Universal/UniversalDetailPageHeader";
import UniversalDetailPageCard from "./Universal/UniversalDetailPageCard";

const UniversalDetail = ({
  myDetailContext,
  myDetailContextDetail,
  myDetailContextDetailDetail,
  myDetailSettings,
}) => {
  if (isEmpty(myDetailContextDetailDetail)) return null;

  // console.log("BBBBBBBBBBBBBBBBB", myDetailContext);

  return (
    <>
      <UniversalDetailPageHeader
        myDetailContext={myDetailContext}
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />

      <UniversalDetailPageCard
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />
    </>
  );
};

export default UniversalDetail;
